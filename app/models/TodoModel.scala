package models

import anorm._
import play.api.db._
import play.api.Play.current
import org.joda.time.DateTime
import play.api.libs.json._
import anorm.SqlParser._
import anorm.Id
import play.api.libs.json.JsSuccess
import play.api.libs.json.JsObject
import play.api.libs.json.JsString
import play.api.libs.json.JsNumber
import play.Logger
import java.text.SimpleDateFormat

case class TodoModel (
  val id :Pk[Int] = NotAssigned,
  var status :Int,
  var comment :String,
  var created_at :DateTime,
  var updated_at :DateTime
)

object TodoModel extends AnormExtension {

  // Json Format
  implicit object TodoFormat extends Format[TodoModel] {
    def reads(json: JsValue) = JsSuccess(TodoModel(
      Id((json \ "id").as[String].toInt),
      (json \ "status").as[Int],
      (json \ "comment").as[String],
      (json \ "created_at").as[DateTime],
      (json \ "updated_at").as[DateTime]
    ))

    def writes(todo: TodoModel) = JsObject(Seq(
      "id" -> JsNumber(todo.id.get),
      "status" -> JsNumber(todo.status),
      "comment" -> JsString(todo.comment),
      "created_at" -> JsString(todo.created_at.toDateTime.toString),
      "updated_at" -> JsString(todo.created_at.toDateTime.toString)
    ))
  }

  // Parser
  var Parser = {
    get[Pk[Int]]("id") ~
      get[Int]("status") ~
      get[String]("comment") ~
      get[DateTime]("created_at") ~
      get[DateTime]("updated_at") map {
      case id ~ status ~ comment ~ created_at ~ updated_at => TodoModel(id, status, comment, created_at, updated_at)
    }
  }

  // 새 할일 저장
  def createTodo(todo: TodoModel) {
    Logger.info("createTodo")
    var id = 0;

    DB.withConnection { implicit conn =>
      val datetime = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(todo.created_at.toDate) // "2013-05-29 11:36:59"

      SQL(
        """
          |INSERT INTO Todo(status, comment, created_at, updated_at) VALUES({status}, {comment}, {created_at}, {updated_at})
        """.stripMargin).on(
        'status -> todo.status,
        'comment -> todo.comment,
        'created_at -> datetime,
        'updated_at -> datetime
      ).executeInsert()

    } match {
      case Some(pk) => {
        id = pk.asInstanceOf[Int]
      }
      case None => println("none")
    }

    id
  }

  // 할일 수정
  def updateTodo(todo: TodoModel) {
    Logger.info("updateTodo")

    DB.withConnection { implicit connection =>
      val datetime = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(todo.updated_at.toDate) // "2013-05-29 11:36:59"
      SQL(
        """
          |UPDATE Todo SET status={status}, comment={comment}, updated_at={updated_at} WHERE id={id}
        """.stripMargin).on(
        'status -> todo.status,
        'comment -> todo.comment,
        'updated_at -> datetime,
        'id -> todo.id
      ).executeUpdate()
    }
  }

  // 할일 목록 가져오기
  def readTodoList: List[TodoModel] = {
    Logger.info("getTodoList")

    DB.withConnection { implicit connection =>
      val queryResult = SQL(
        """
          |SELECT * FROM Todo ORDER BY created_at DESC
        """.stripMargin).as(TodoModel.Parser.*)
      queryResult
    }
  }


  def readTodo(id: Int): TodoModel = {
    Logger.info("readTodo")

    DB.withConnection { implicit connection =>
      val queryResult = SQL(
        """
          |SELECT * FROM Todo WHERE id={id}
        """.stripMargin).on(
        'id -> id
      )as(TodoModel.Parser.*)

      queryResult(0)
    }

  }

  // 할일 삭제
  def deleteTodo(id: Int) {
    Logger.info("deleteTodo")
    Logger.info("id :" + id)

    DB.withConnection { implicit connection =>
      SQL(
        """
          |DELETE FROM Todo WHERE id={id}
        """.stripMargin).on('id -> id.toString).executeUpdate()
    }
  }

  // 할일 모두 완료
  def updateCompleteTodo {
    Logger.info("updateCompleteTodo")

    DB.withConnection { implicit connection =>
      val datetime = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(DateTime.now.toDate) // "2013-05-29 11:36:59"

      SQL(
        """
          |UPDATE Todo SET status={status}, updated_at={updated_at}
        """.stripMargin).on(
        'status -> 1,
        'updated_at -> datetime
      ).executeUpdate()
    }
  }
}
