import { Express } from "express";
import { FindAllLoginsByPermissionsController } from "src/http/controllers/logins-has-permissions/find/find-all-logins-by-permissions.controller";
import { FindAllPermissionsByLogin } from "src/http/controllers/logins-has-permissions/find/find-all-permissions-by-login.controller";
import { FindLoginHasPermissionController } from "src/http/controllers/logins-has-permissions/find/find-login-has-permission.controller";

function LoginsHasPermissionsFindRouter(app:Express) {
  app.get('/logins/permissions/email/:email',FindAllPermissionsByLogin);
  app.get('logins/permissions/name/:permission',FindAllLoginsByPermissionsController);
  app.post('/logins/permissions/check_user',FindLoginHasPermissionController)
}

export { LoginsHasPermissionsFindRouter };