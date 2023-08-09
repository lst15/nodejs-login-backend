import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { PrismaRolesRepository } from "src/repository/implementations/prisma/prisma-roles.repository";
import { RoleHasPermissionsFindPermissionsByRoleUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-permissions-by-role.usecase";

function RoleHasPermissionsFindByRoleFactory(){
  const repository = new PrismaRoleHasPermissionsRepository();
  const rolesRepository = new PrismaRolesRepository();

  return new RoleHasPermissionsFindPermissionsByRoleUseCase(
    repository,rolesRepository
  );
}

export {RoleHasPermissionsFindByRoleFactory};