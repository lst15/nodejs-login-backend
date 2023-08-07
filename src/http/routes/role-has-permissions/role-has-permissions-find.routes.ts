import { Express } from "express";
import { RoleHasPermissionsFindPermissionsByRoleController } from "src/http/controllers/role-has-permissions/find/role-has-permissions-find-permissions-by-role.controller";
import { RoleHasPermissionsFindRolesByPermissionController } from "src/http/controllers/role-has-permissions/find/role-has-permissions-find-roles-by-permission.controller";
import { MiddlewareRoleHasPermissionsFindPermissionsByRoleDto } from "src/http/middleware/dto/role-has-permissions/find/middleware-role-has-permissions-find-permissions-by-role.dto";
import { MiddlewareRoleHasPermissionsFindRolesByPermissionDto } from "src/http/middleware/dto/role-has-permissions/find/middleware-role-has-permissions-find-roles-by-permission.dto";

function RoleHasPermissionsFindRoutes(app:Express){
  app.get("/roles/permissions/by_role/:role_name",
    MiddlewareRoleHasPermissionsFindPermissionsByRoleDto(),
    RoleHasPermissionsFindPermissionsByRoleController
  );

  app.get("/roles/permissions/by_permission/:permission_name",
    MiddlewareRoleHasPermissionsFindRolesByPermissionDto(),
    RoleHasPermissionsFindRolesByPermissionController
  );
}

export {RoleHasPermissionsFindRoutes};