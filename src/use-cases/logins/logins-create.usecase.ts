import { QueryError } from "../../enums/enums-prisma-errors";
import { UniqueLoginsCreateError } from "../../errors/logins/unique/unique-logins-create.error";
import { InterfaceLoginRepository } from "../../repository/interfaces/interface-login.repository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

interface LoginsCreateUseCaseRequest {
  email: string;
  password: string;
}

class LoginsCreateUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({ email, password }: LoginsCreateUseCaseRequest) {
    try {
      const executed = await this.loginsRepository.create(email, password);
      return executed;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == QueryError.UniqueConstraintViolation) {
          return new UniqueLoginsCreateError("email", error);
        }
      }

      throw error;
    }
  }
}

export { LoginsCreateUseCase };
