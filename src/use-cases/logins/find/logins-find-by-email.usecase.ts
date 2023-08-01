import { logins } from "@prisma/client";
import { InterfaceLoginRepository } from "../../../repository/interfaces/interface-login.repository";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

interface LoginsFindByEmailUseCaseRequest {
  email: string;
}

class LoginsFindByEmailUseCase {
  constructor(private loginsRepository: InterfaceLoginRepository) {}
  
  async execute({ email }: LoginsFindByEmailUseCaseRequest): Promise<logins | null> {
    const user = await this.loginsRepository.findByEmail(email);

    if(!user){
      throw new RecordNotFound("email");
    }

    return user;
  }
}

export { LoginsFindByEmailUseCase };