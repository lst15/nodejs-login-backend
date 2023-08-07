import { PrismaRolesRepository } from "src/repository/implementations/prisma/prisma-roles.repository";
import { RolesCreateUseCase } from "src/use-cases/roles/create/roles-create.usecase";

function RolesDeleteByNameFactory(){
  const repository = new PrismaRolesRepository();
  return new RolesCreateUseCase(repository);
}

export {RolesDeleteByNameFactory};