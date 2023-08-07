import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { RoleHasPermissionsDeleteRolePermissionUseCase } from "src/use-cases/role-has-permissions/delete/role-has-permissions-delete-role-permission.usecase";

function RoleHasPermissionsDeleteRolePermissionFactory(){
  const repository = new PrismaRoleHasPermissionsRepository();
  return new RoleHasPermissionsDeleteRolePermissionUseCase(repository);
}

export {RoleHasPermissionsDeleteRolePermissionFactory};