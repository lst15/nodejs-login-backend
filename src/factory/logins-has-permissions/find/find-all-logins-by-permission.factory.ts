import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { FindAllLoginsByPermissionUseCase } from "src/use-cases/logins-has-permissions/find/find-all-logins-by-permission.usecase";

function FindAllLoginsByPermissionFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();
  const repositoryPermission = new PrismaPermissionsRepository();
  const repositoryLogin = new PrismaLoginRepository();  

  const usecase = new FindAllLoginsByPermissionUseCase(
    repositoryLoginHasPermission,
    repositoryPermission    
  )

  return usecase;
}

export { FindAllLoginsByPermissionFactory };