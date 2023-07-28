import { logins } from "@prisma/client";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";

interface LoginsFindByUuidUseCaseRequest {
  uuid: string;
}

class LoginsFindByUuidUseCase {
  constructor(private loginsRepository: InterfaceLoginRepository) {}

  async execute({ uuid }: LoginsFindByUuidUseCaseRequest): Promise<logins | null> {    
    return await this.loginsRepository.findByUuId(uuid);
  }
}

export { LoginsFindByUuidUseCase };