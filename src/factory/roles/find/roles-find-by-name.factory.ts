import { PrismaRolesRepository } from "src/repository/implementations/prisma/prisma-roles.repository";
import { RolesFindByNameUseCase } from "src/use-cases/roles/find/roles-find-by-name.usecase";

function RolesFindByNameFactory(){
  const repository = new PrismaRolesRepository();
  return new RolesFindByNameUseCase(repository);
}

export {RolesFindByNameFactory}