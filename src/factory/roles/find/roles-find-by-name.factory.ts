import { PrismaRolesRepository } from "src/repository/implementations/prisma/prisma-roles.repository";
import { RolesDeleteByNameUseCase } from "src/use-cases/roles/delete/roles-delete-by-name.usecase";

function RolesFindByNameFactory(){
  const repository = new PrismaRolesRepository();
  return new RolesDeleteByNameUseCase(repository);
}

export {RolesFindByNameFactory}