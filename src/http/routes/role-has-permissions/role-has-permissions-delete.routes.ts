import { Express } from "express";
import { RoleHasPermissionsDeleteRolePermissionController } from "src/http/controllers/role-has-permissions/delete/role-has-permissions-delete-role-permission.controller";

function RoleHasPermissionsDeleteRoutes(app:Express){
  app.delete("/roles/permissions",RoleHasPermissionsDeleteRolePermissionController);
}

export {RoleHasPermissionsDeleteRoutes};