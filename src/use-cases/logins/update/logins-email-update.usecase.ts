import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";

interface LoginsEmailUpdateUseCaseRequest {
  email: string;
  newemail:string;
}

class LoginsEmailUpdateUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({email,newemail}: LoginsEmailUpdateUseCaseRequest) {
    const login = await this.loginsRepository.findByEmail(email);
    const exists = await this.loginsRepository.findByEmail(newemail);

    if(!login || exists){
      throw new RecordNotFound("email");
    }

    return await this.loginsRepository.updateEmail(email,newemail);
  }
}

export { LoginsEmailUpdateUseCase };