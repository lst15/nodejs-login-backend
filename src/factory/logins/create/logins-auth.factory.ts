import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { LoginsAuthUseCase } from "src/use-cases/logins/create/logins-auth.usecase";

function LoginsAuthFactory(){
  const repository = new PrismaLoginRepository();
  const usecase = new LoginsAuthUseCase(repository);

  return usecase;
}

export {LoginsAuthFactory}