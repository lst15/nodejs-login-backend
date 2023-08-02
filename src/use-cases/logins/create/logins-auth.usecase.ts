import { logins } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import bcrypt from "bcrypt";

interface LoginsAuthUseCaseRequest {
  email: string;
  password: string;
}

class LoginsAuthUseCase {
  constructor(private loginsRepository: InterfaceLoginRepository) { }

  async execute({ email, password }: LoginsAuthUseCaseRequest): Promise<logins> {
    const userExists = await this.loginsRepository.findByEmail(email);

    if (!userExists) {
      throw new RecordNotFound("user or password")
    }
    
    const isCorrectPassword = await bcrypt.compare(password, userExists.password);
    
    if (!isCorrectPassword) {
      throw new RecordNotFound("user or password")
    }

    return userExists;
  }

}

export { LoginsAuthUseCase };