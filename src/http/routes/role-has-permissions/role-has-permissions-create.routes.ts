import { Express } from "express";
import { RoleHasPermissionsDelegateController } from "src/http/controllers/role-has-permissions/create/role-has-permissions-delegate.controller";

function RoleHasPermissionsCreateRoutes(app:Express) {
  app.post("/role/permissions",RoleHasPermissionsDelegateController);
}

export {RoleHasPermissionsCreateRoutes};