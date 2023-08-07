import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { RoleHasPermissionsFindPermissionsByRoleUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-permissions-by-role.usecase";
import { RoleHasPermissionsFindRolesByPermissionUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-roles-by-permission.usecase";

function RoleHasPermissionsFindByRoleFactory(){
  const repository = new PrismaRoleHasPermissionsRepository();
  return new RoleHasPermissionsFindPermissionsByRoleUseCase(repository);
}

export {RoleHasPermissionsFindByRoleFactory};