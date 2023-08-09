import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { PrismaRolesRepository } from "src/repository/implementations/prisma/prisma-roles.repository";
import { RoleHasPermissionsDelegateUseCase } from "src/use-cases/role-has-permissions/create/role-has-permissions-delegate.usecase";

function RoleHasPermissionsDelegateFactory(){
  const permissionRepository = new PrismaPermissionsRepository();
  const rolesRepository = new PrismaRolesRepository()
  const repository = new PrismaRoleHasPermissionsRepository();

  return new RoleHasPermissionsDelegateUseCase(
    repository,
    rolesRepository,
    permissionRepository
  );
}

export {RoleHasPermissionsDelegateFactory};