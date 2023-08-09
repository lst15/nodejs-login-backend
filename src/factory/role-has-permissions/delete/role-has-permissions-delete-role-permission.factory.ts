import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { PrismaRolesRepository } from "src/repository/implementations/prisma/prisma-roles.repository";
import { RoleHasPermissionsDeleteRolePermissionUseCase } from "src/use-cases/role-has-permissions/delete/role-has-permissions-delete-role-permission.usecase";

function RoleHasPermissionsDeleteRolePermissionFactory(){  
  const rolesRepository = new PrismaRolesRepository();
  const permissionsRepository = new PrismaPermissionsRepository();
  const repository = new PrismaRoleHasPermissionsRepository();

  return new RoleHasPermissionsDeleteRolePermissionUseCase(
    repository,rolesRepository,permissionsRepository
  );
}

export {RoleHasPermissionsDeleteRolePermissionFactory};