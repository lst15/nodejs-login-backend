import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PermissionsUpdateByNameUseCase } from "src/use-cases/permissions/update/permissions-update-by-name.usecase";

function PermissionsUpdateByNameFactory(){
  const repository = new PrismaPermissionsRepository();
  const usecase = new PermissionsUpdateByNameUseCase(repository);

  return usecase;
}

export { PermissionsUpdateByNameFactory };