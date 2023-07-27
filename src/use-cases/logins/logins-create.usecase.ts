import { QueryError } from "../../enums/enums-prisma-errors";
import { UniqueLoginsCreateError } from "../../errors/logins/unique/unique-logins-create.error";
import { InterfaceLoginRepository } from "../../repository/interfaces/interface-login.repository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt";

interface LoginsCreateUseCaseRequest {
  email: string;
  password: string;
}

class LoginsCreateUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({ email, password }: LoginsCreateUseCaseRequest) {

    const bcryptPassword = await bcrypt.hash(password, 10);

    try {
      const executed = await this.loginsRepository.create(email, bcryptPassword);
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
