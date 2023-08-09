import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { RoleHasPermissionsFindRolesByPermissionUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-roles-by-permission.usecase";

function RoleHasPermissionsFindRolesByPermissionFactory(){
  const repository = new PrismaRoleHasPermissionsRepository();
  const permissionsRepository = new PrismaPermissionsRepository();

  return new RoleHasPermissionsFindRolesByPermissionUseCase(
    repository,permissionsRepository
  );
}

export {RoleHasPermissionsFindRolesByPermissionFactory};