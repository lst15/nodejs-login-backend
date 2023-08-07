import { Express } from "express";
import { RoleHasPermissionsFindPermissionsByRoleController } from "src/http/controllers/role-has-permissions/find/role-has-permissions-find-permissions-by-role.controller";
import { RoleHasPermissionsFindRolesByPermissionController } from "src/http/controllers/role-has-permissions/find/role-has-permissions-find-roles-by-permission.controller";
import { MiddlewareRoleHasPermissionsFindPermissionsByRoleDto } from "src/http/middleware/dto/role-has-permissions/find/middleware-role-has-permissions-find-permissions-by-role.dto";

function RoleHasPermissionsFindRoutes(app:Express){
  app.get("/role/permissions/by_role/:role",
    MiddlewareRoleHasPermissionsFindPermissionsByRoleDto(),
    RoleHasPermissionsFindPermissionsByRoleController
  );
  
  app.get("/role/permissions/by_permission/:permission",
    MiddlewareRoleHasPermissionsFindPermissionsByRoleDto(),
    RoleHasPermissionsFindRolesByPermissionController
  );
}

export {RoleHasPermissionsFindRoutes};