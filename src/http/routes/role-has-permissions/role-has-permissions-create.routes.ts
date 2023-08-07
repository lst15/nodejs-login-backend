import { Express } from "express";
import { RoleHasPermissionsDelegateController } from "src/http/controllers/role-has-permissions/create/role-has-permissions-delegate.controller";
import { MiddlewareRoleHasPermissionsDelegateDto } from "src/http/middleware/dto/role-has-permissions/create/middleware-role-has-permissions-delegate.dto";

function RoleHasPermissionsCreateRoutes(app:Express) {
  app.post("/roles/permissions",
    MiddlewareRoleHasPermissionsDelegateDto(),
    RoleHasPermissionsDelegateController
  );
}

export {RoleHasPermissionsCreateRoutes};