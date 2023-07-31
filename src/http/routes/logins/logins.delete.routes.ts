import { Express } from "express";
import { LoginsDeleteController } from "src/http/controllers/logins/delete/logins-delete.controller";

function LoginsDeleteRoutes(app:Express) {
  app.delete('/logins',LoginsDeleteController)
}

export { LoginsDeleteRoutes };