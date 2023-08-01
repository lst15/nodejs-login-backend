import { Express } from "express";
import { FindAllLoginsByPermissionsController } from "src/http/controllers/logins-has-permissions/find/find-all-logins-by-permissions.controller";
import { FindAllPermissionsByLogin } from "src/http/controllers/logins-has-permissions/find/find-all-permissions-by-login.controller";
import { FindLoginHasPermissionController } from "src/http/controllers/logins-has-permissions/find/find-login-has-permission.controller";

function LoginsHasPermissionsFindRouter(app:Express) {
  app.get('/login/permissions/email/:email',FindAllPermissionsByLogin);
  app.get('/login/permissions/name/:name',FindAllLoginsByPermissionsController);
  app.post('/login/permissions/check_user',FindLoginHasPermissionController)
}

export { LoginsHasPermissionsFindRouter };