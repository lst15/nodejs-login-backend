import { Express } from "express";
import { RemoveAllLoginsByPermissionsDeleteController } from "src/http/controllers/logins-has-permissions/delete/remove-all-logins-by-permissions-delete.controller";
import { RemoveAllPermissionsByLoginDeleteController } from "src/http/controllers/logins-has-permissions/delete/remove-all-permissions-by-login-delete.controller";
import { RemovePermissionDeleteController } from "src/http/controllers/logins-has-permissions/delete/remove-permission-delete.controller";

function LoginsHasPermissionsDeleteRouter(app:Express){
  app.delete('/login/permissions',RemovePermissionDeleteController);
  app.delete('/login/permissions/email',RemoveAllPermissionsByLoginDeleteController);
  app.delete('/login/permissions/name',RemoveAllLoginsByPermissionsDeleteController);
}

export default LoginsHasPermissionsDeleteRouter;