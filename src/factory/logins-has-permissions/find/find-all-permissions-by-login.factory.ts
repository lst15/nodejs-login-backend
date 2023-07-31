import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { FindAllPermissionsFindByLoginUseCase } from "src/use-cases/logins-has-permissions/find/find-all-permissions-by-login.usecase";

function FindAllPermissionsByLoginFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();
  const repositoryPermission = new PrismaPermissionsRepository();
  const repositoryLogin = new PrismaLoginRepository();  

  const usecase = new FindAllPermissionsFindByLoginUseCase(
    repositoryLoginHasPermission,
    repositoryLogin    
  )

  return usecase;
}

export { FindAllPermissionsByLoginFactory };