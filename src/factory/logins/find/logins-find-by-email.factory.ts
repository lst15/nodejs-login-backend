import { PrismaLoginRepository } from "../../../repository/implementations/prisma/prisma-login.repository";
import { LoginsFindByEmailUseCase } from "../../../use-cases/logins/find/logins-find-by-email.usecase";

function LoginsFindByEmailFactory(){
  const repository = new PrismaLoginRepository()
  const usecase = new LoginsFindByEmailUseCase(repository);

  return usecase;
}

export { LoginsFindByEmailFactory };