import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PermissionsFindAllUseCase } from "src/use-cases/permissions/find/permissions-find-all.usecase";
import { PermissionsFindByNameUseCase } from "src/use-cases/permissions/find/permissions-find-by-name.usecase";

function PermissiondFindByNameFactory(){
  const repository = new PrismaPermissionsRepository();
  const usecase = new PermissionsFindByNameUseCase(repository);

  return usecase;
}

export { PermissiondFindByNameFactory };