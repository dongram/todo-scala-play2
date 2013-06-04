package controllers

import play.api._
import play.api.mvc._
import play.api.mvc.Results._

object GlobalController extends GlobalSettings {
  // 404
  override def onHandlerNotFound(req :RequestHeader) = {
    NotFound(views.html.commons.err404.render(req.path))
  }

  // 파라메터 오류 혹은 라우터에 정의 되어 있지 않은 경우
  override def onBadRequest(req :RequestHeader, err :String) = {
    BadRequest("Bad Request" + err)
  }

  // 500
  override def onError(req :RequestHeader, ex :Throwable) :Result = {
    Logger.error("Server Error" + req.path, ex)
    InternalServerError(
      views.html.commons.err500.render()
    )
  }

}
