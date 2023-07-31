import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import bcrypt from "bcrypt";
import { logins } from "@prisma/client";

interface LoginsPasswordUpdateUseCaseRequest {
  email:string;
  newpassword:string;
}

class LoginsPasswordUpdateUseCase {
  constructor(private readonly loginsRepository:InterfaceLoginRepository) {}

  async execute({email,newpassword}: LoginsPasswordUpdateUseCaseRequest) {
    const userExists = await this.loginsRepository.findByEmail(email);

    if(!userExists){
      throw new RecordNotFound(email)
    }

    const bcryptPassword = await bcrypt.hash(newpassword, 10);

    return await this.loginsRepository.updatePassword(email,bcryptPassword)
  }
}

export { LoginsPasswordUpdateUseCase };