import { PrismaLoginHasPermissionRepository } from "src/repository/implementations/prisma/prisma-login-has-permission.repository";
import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { DelegatePermissionUseCase } from "src/use-cases/logins-has-permissions/create/delegate-permission-create.usecase";

function DelegatePermissionCreateFactory(){
  const repositoryLoginHasPermission = new PrismaLoginHasPermissionRepository();
  const repositoryPermission = new PrismaPermissionsRepository
  const repositoryLogin = new PrismaLoginRepository();

  const usecase = new DelegatePermissionUseCase(
    repositoryLoginHasPermission,
    repositoryLogin,
    repositoryPermission    
  );

  return usecase;
}

export {DelegatePermissionCreateFactory};