import { PrismaRoleHasPermissionsRepository } from "src/repository/implementations/prisma/prisma-role-has-permissions.repository";
import { RoleHasPermissionsDelegateUseCase } from "src/use-cases/role-has-permissions/create/role-has-permissions-delegate.usecase";

function RoleHasPermissionsDelegateFactory(){
  const repository = new PrismaRoleHasPermissionsRepository();
  return new RoleHasPermissionsDelegateUseCase(repository);
}

export {RoleHasPermissionsDelegateFactory};