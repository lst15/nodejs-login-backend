import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { LoginsEmailUpdateUseCase } from "src/use-cases/logins/update/logins-email-update.usecase";

function LoginsEmailUpdateFactory(){
  const repository = new PrismaLoginRepository();
  const usecase = new LoginsEmailUpdateUseCase(repository);

  return usecase;
}

export { LoginsEmailUpdateFactory };