import { Express } from "express";
import { LoginsDeleteController } from "src/http/controllers/logins/delete/logins-delete.controller";
import { MiddlewareLoginsDeleteDto } from "src/http/middleware/dto/logins/delete/middleware-logins-delete.dto";

function LoginsDeleteRoutes(app:Express) {
  app.delete('/login',MiddlewareLoginsDeleteDto(),LoginsDeleteController);
}

export { LoginsDeleteRoutes };