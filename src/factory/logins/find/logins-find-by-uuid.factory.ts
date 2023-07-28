import { PrismaLoginRepository } from "src/repository/implementations/prisma/prisma-login.repository";
import { LoginsFindByUuidUseCase } from "src/use-cases/logins/find/logins-find-by-uuid.usecase";

function LoginsFindByUuidFactory(){
  const repository = new PrismaLoginRepository();
  const usecase = new LoginsFindByUuidUseCase(repository);

  return usecase;
}

export { LoginsFindByUuidFactory };