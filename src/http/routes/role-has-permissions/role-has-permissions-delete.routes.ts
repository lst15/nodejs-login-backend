import { Express } from "express";
import { RoleHasPermissionsDeleteRolePermissionController } from "src/http/controllers/role-has-permissions/delete/role-has-permissions-delete-role-permission.controller";
import { MiddlewareRoleHasPermissionsDeleteDto } from "src/http/middleware/dto/role-has-permissions/delete/middleware-role-has-permissions-delete.dto";

function RoleHasPermissionsDeleteRoutes(app:Express){
  app.delete("/roles/permissions",
    MiddlewareRoleHasPermissionsDeleteDto(),
    RoleHasPermissionsDeleteRolePermissionController
  );
}

export {RoleHasPermissionsDeleteRoutes};