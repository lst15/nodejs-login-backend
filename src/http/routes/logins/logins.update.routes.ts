import { Express } from "express";
import { LoginsEmailUpdateController } from "src/http/controllers/logins/update/logins-email-update.controller";
import { LoginsPasswordUpdateController } from "src/http/controllers/logins/update/logins-password-update.controller";

function LoginsUpdateRoutes(app:Express) {
  app.put('/login/password',LoginsPasswordUpdateController);
  app.put('/login/email',LoginsEmailUpdateController)
}

export { LoginsUpdateRoutes }