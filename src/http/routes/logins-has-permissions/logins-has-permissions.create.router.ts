import { Express } from "express";
import { DelegatePermissionCreateController } from "src/http/controllers/logins-has-permissions/create/delegate-permission-create.controller";

function LoginsHasPermissionsCreateRouter(app:Express) {
  app.post("/login/permissions",DelegatePermissionCreateController);
}

export default LoginsHasPermissionsCreateRouter;