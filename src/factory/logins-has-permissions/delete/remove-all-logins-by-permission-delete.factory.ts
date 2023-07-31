import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { RemoveAllLoginsByPermissionDeleteUseCase } from "src/use-cases/logins-has-permissions/delete/remove-all-logins-by-permission-delete.usecase";

function RemoveAllLoginsByPermissionDeleteFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();
  const repositoryPermission = new PrismaPermissionsRepository();  

  const usecase = new RemoveAllLoginsByPermissionDeleteUseCase(
    repositoryLoginHasPermission,
    repositoryPermission,    
  )

  return usecase;
}

export { RemoveAllLoginsByPermissionDeleteFactory };