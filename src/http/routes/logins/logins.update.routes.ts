import { Express } from "express";
import { LoginsEmailUpdateController } from "src/http/controllers/logins/update/logins-email-update.controller";
import { LoginsPasswordUpdateController } from "src/http/controllers/logins/update/logins-password-update.controller";
import { MiddlewareLoginsEmailUpdateDto } from "src/http/middleware/dto/logins/update/middleware-logins-email-update.dto";
import { MiddlewareLoginsPasswordUpdateDto } from "src/http/middleware/dto/logins/update/middleware-logins-password-update.dto";

function LoginsUpdateRoutes(app:Express) {
  app.put('/login/password',MiddlewareLoginsPasswordUpdateDto(),LoginsPasswordUpdateController);
  app.put('/login/email',MiddlewareLoginsEmailUpdateDto(),LoginsEmailUpdateController)
}

export { LoginsUpdateRoutes }