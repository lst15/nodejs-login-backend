import { InterfaceLoginRepository } from "../../repository/interfaces/interface-login.repository";

interface LoginsCreateUseCaseRequest {
  email: string;
  password: string;
}

class LoginsCreateUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({email,password}:LoginsCreateUseCaseRequest): Promise<any> {
    const user = await this.loginsRepository.create(email, password);
    return user
  }

}

export { LoginsCreateUseCase };