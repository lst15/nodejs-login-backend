import { Express } from "express";
import { RemoveAllLoginsByPermissionsDeleteController } from "src/http/controllers/logins-has-permissions/delete/remove-all-logins-by-permissions-delete.controller";
import { RemoveAllPermissionsByLoginDeleteController } from "src/http/controllers/logins-has-permissions/delete/remove-all-permissions-by-login-delete.controller";
import { RemovePermissionDeleteController } from "src/http/controllers/logins-has-permissions/delete/remove-permission-delete.controller";
import { MiddlewareLoginHasPermissionsDeleteDto } from "src/http/middleware/dto/logins-has-permissions/delete/middleware-login-has-permissions-delete.dto";
import { MiddlewareLoginsHasPermissionsRemoveAllLoginsByPermissionsDto } from "src/http/middleware/dto/logins-has-permissions/delete/middleware-login-has-permissions-remove-all-logins-by-permissions.dto.ts";
import { MiddlewareLoginHasPermissionsRemoveAllPermissionsByLoginDto } from "src/http/middleware/dto/logins-has-permissions/delete/middleware-login-has-permissions-remove-all-permissions-by-login.dto";

function LoginsHasPermissionsDeleteRouter(app:Express){
  app.delete('/login/permissions',MiddlewareLoginHasPermissionsDeleteDto(),RemovePermissionDeleteController);
  app.delete('/login/permissions/email',MiddlewareLoginHasPermissionsRemoveAllPermissionsByLoginDto(),RemoveAllPermissionsByLoginDeleteController);
  app.delete('/login/permissions/name',MiddlewareLoginsHasPermissionsRemoveAllLoginsByPermissionsDto(),RemoveAllLoginsByPermissionsDeleteController);
}

export default LoginsHasPermissionsDeleteRouter;