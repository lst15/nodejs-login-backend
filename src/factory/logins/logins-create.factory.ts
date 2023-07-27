import { PrismaLoginRepository } from "../../repository/implementations/prisma/prisma-login.repository";
import { LoginsCreateUseCase } from "../../use-cases/logins/logins-create.usecase";

function LoginsCreateFactory(){
  const repository = new PrismaLoginRepository();
  const usecase = new LoginsCreateUseCase(repository);

  return usecase;
}

export { LoginsCreateFactory };