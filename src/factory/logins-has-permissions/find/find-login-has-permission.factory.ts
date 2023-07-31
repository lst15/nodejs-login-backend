import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { FindLoginHasPermissionUseCase } from "src/use-cases/logins-has-permissions/find/find-login-has-permissions.usecase";

function findLoginHasPermissionFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();
  const repositoryPermission = new PrismaPermissionsRepository();
  const repositoryLogin = new PrismaLoginRepository();  

  const usecase = new FindLoginHasPermissionUseCase(
    repositoryLoginHasPermission,        
    repositoryLogin,
    repositoryPermission
  )

  return usecase;
}

export { findLoginHasPermissionFactory };