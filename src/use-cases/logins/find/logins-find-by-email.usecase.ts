import { logins } from "@prisma/client";
import { InterfaceLoginRepository } from "../../../repository/interfaces/interface-login.repository";

interface LoginsFindByEmailUseCaseRequest {
  email: string;
}

class LoginsFindByEmailUseCase {
  constructor(private loginsRepository: InterfaceLoginRepository) {}
  
  async execute({ email }: LoginsFindByEmailUseCaseRequest): Promise<logins | null> {
    const user = await this.loginsRepository.findByEmail(email);
    return user;
  }
}

export { LoginsFindByEmailUseCase };