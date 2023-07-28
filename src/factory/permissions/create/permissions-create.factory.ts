import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { PermissionsCreateUseCase } from "src/use-cases/permissions/create/permissions-create.usecase";

function PermissionsCreateFactory(){
  const repository = new PrismaPermissionsRepository();
  const usecase = new PermissionsCreateUseCase(repository);

  return usecase;
}

export { PermissionsCreateFactory };