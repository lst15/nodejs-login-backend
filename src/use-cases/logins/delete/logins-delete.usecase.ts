import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";

interface LoginsDeleteUseCaseRequest {
  email: string;
}

class LoginsDeleteUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({email}:LoginsDeleteUseCaseRequest) {
    const userExists = await this.loginsRepository.findByEmail(email);

    if(!userExists){
      throw new RecordNotFound("email")
    }

    return await this.loginsRepository.deleteByEmail(email);
  }
}

export { LoginsDeleteUseCase };