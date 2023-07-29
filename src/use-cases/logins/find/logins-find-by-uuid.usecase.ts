import { logins } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";

interface LoginsFindByUuidUseCaseRequest {
  uuid: string;
}

class LoginsFindByUuidUseCase {
  constructor(private loginsRepository: InterfaceLoginRepository) {}

  async execute({ uuid }: LoginsFindByUuidUseCaseRequest): Promise<logins | null> {    
    const login = await this.loginsRepository.findByUuId(uuid);

    if(!login) {
      throw new RecordNotFound(uuid);
    }

    return login;
  }
}

export { LoginsFindByUuidUseCase };