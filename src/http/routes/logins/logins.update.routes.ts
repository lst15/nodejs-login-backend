import { Express } from "express";
import { LoginsEmailUpdateController } from "src/http/controllers/logins/update/logins-email-update.controller";
import { LoginsPasswordUpdateController } from "src/http/controllers/logins/update/logins-password-update.controller";

function LoginsUpdateRoutes(app:Express) {
  app.put('/logins/password',LoginsPasswordUpdateController);
  app.put('/logins/email',LoginsEmailUpdateController)
}

export { LoginsUpdateRoutes }