package controllers

import models.TodoModel
import org.joda.time.DateTime
import play.api.mvc._

object TodoController extends Controller {

  def createTodo = Action { implicit request =>
    val status = 0
    val comment = request.body.asFormUrlEncoded.get("comment")(0)
    TodoModel.createTodo(new TodoModel(null, status, comment, DateTime.now, DateTime.now))

    Redirect("/")
  }

  def updateTodo = Action { implicit request =>
    val status = request.body.asFormUrlEncoded.get("status")(0).toInt
    val updateId = request.body.asFormUrlEncoded.get("id")(0)
    val comment = request.body.asFormUrlEncoded.get("comment")(0)

    val todo: TodoModel = TodoModel.readTodo(updateId.toInt)
    todo.status = status
    todo.comment = comment
    todo.updated_at = DateTime.now()
    println(todo);
    TodoModel.updateTodo(todo)

    Redirect("/")
  }

  def readTodo = Action {
    val todoList: List[TodoModel] = TodoModel.readTodoList

    Ok(views.html.index(todoList))
  }

  def deleteTodo = Action { implicit request =>
    val deleteId = request.queryString("id").mkString
    TodoModel.deleteTodo(deleteId.toInt)

    Redirect("/")
  }

  def updateCompleteTodo = Action { implicit request =>
    TodoModel.updateCompleteTodo

    Redirect("/")
  }

}
