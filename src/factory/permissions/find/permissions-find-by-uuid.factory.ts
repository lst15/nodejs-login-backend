import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PermissionsFindByUuidUseCase } from "src/use-cases/permissions/find/permissions-find-by-uuid.usecase";

function PermissionsFindByUuidFactory(){
  const repository = new PrismaPermissionsRepository();
  const usecase = new PermissionsFindByUuidUseCase(repository);

  return usecase;
}

export { PermissionsFindByUuidFactory };