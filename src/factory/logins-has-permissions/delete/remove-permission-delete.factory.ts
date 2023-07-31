import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { RemovePermissionDeleteUseCase } from "src/use-cases/logins-has-permissions/delete/remove-permission-delete.usecase";

function RemovePermissionDeleteFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();
  const repositoryPermission = new PrismaPermissionsRepository();
  const repositoryLogin = new PrismaLoginRepository();

  const usecase = new RemovePermissionDeleteUseCase(
    repositoryLoginHasPermission,
    repositoryLogin,
    repositoryPermission
  )

  return usecase;
}

export { RemovePermissionDeleteFactory };