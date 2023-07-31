import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { LoginsDeleteUseCase } from "src/use-cases/logins/delete/logins-delete.usecase";

function LoginsDeleteFactory(){
  const repository = new PrismaLoginRepository();
  const usecase = new LoginsDeleteUseCase(repository);

  return usecase;
}

export { LoginsDeleteFactory };