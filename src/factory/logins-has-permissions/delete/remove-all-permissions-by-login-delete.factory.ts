import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { RemoveAllPermissionsByLoginDeleteUseCase } from "src/use-cases/logins-has-permissions/delete/remove-all-permissions-by-login-delete.usecase";

function RemoveAllPermissionsByLoginDeleteFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();  
  const repositoryLogin = new PrismaLoginRepository();

  const usecase = new RemoveAllPermissionsByLoginDeleteUseCase(
    repositoryLoginHasPermission,
    repositoryLogin
  )

  return usecase;
}

export { RemoveAllPermissionsByLoginDeleteFactory };