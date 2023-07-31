import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { LoginsPasswordUpdateUseCase } from "src/use-cases/logins/update/logins-password-update.usecase";

function LoginsPasswordUpdateFactory(){
  const repository = new PrismaLoginRepository();
  const usecase = new LoginsPasswordUpdateUseCase(repository);

  return usecase;
}

export { LoginsPasswordUpdateFactory };