import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PermissionsFindAllUseCase } from "src/use-cases/permissions/find/permissions-find-all.usecase";

function PermissiondFindByNameFactory(){
  const repository = new PrismaPermissionsRepository();
  const usecase = new PermissionsFindAllUseCase(repository);

  return usecase;
}

export { PermissiondFindByNameFactory };