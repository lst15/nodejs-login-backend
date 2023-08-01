import { Express } from "express";
import { DelegatePermissionCreateController } from "src/http/controllers/logins-has-permissions/create/delegate-permission-create.controller";
import { MiddlewareLoginsHasPermissionsDelegateDto } from "src/http/middleware/dto/logins-has-permissions/create/middleware-logins-has-permissions-delegate.dto";

function LoginsHasPermissionsCreateRouter(app:Express) {
  app.post("/login/permissions",MiddlewareLoginsHasPermissionsDelegateDto(),DelegatePermissionCreateController);
}

export default LoginsHasPermissionsCreateRouter;