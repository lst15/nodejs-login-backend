import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";

interface LoginsEmailUpdateUseCaseRequest {
  email: string;
  newemail:string;
}

class LoginsEmailUpdateUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({email,newemail}: LoginsEmailUpdateUseCaseRequest) {
    const userExists = await this.loginsRepository.findByEmail(email);

    if(userExists){
      throw new RecordNotFound("email");
    }

    return await this.loginsRepository.updateEmail(email,newemail);
  }
}

export { LoginsEmailUpdateUseCase };