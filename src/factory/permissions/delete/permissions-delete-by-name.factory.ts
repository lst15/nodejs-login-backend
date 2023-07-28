import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PermissionsDeleteByNameUseCase } from "src/use-cases/permissions/delete/permissions-delete-by-name.usecase";

function PermissionsDeleteByNameFactory(){
  const repository = new PrismaPermissionsRepository();
  const usecase = new PermissionsDeleteByNameUseCase(repository);

  return usecase;
}

export { PermissionsDeleteByNameFactory };