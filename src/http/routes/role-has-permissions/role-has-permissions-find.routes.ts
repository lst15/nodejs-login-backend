import { Express } from "express";
import { RoleHasPermissionsFindPermissionsByRoleController } from "src/http/controllers/role-has-permissions/find/role-has-permissions-find-permissions-by-role.controller";
import { RoleHasPermissionsFindRolesByPermissionController } from "src/http/controllers/role-has-permissions/find/role-has-permissions-find-roles-by-permission.controller";

function RoleHasPermissionsFindRoutes(app:Express){
  app.get("/role/permissions/by_role/:role",RoleHasPermissionsFindPermissionsByRoleController);
  app.get("/role/permissions/by_permission/:permission",RoleHasPermissionsFindRolesByPermissionController);
}

export {RoleHasPermissionsFindRoutes};