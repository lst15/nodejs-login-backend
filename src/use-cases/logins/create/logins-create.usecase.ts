import { QueryError } from "../../../enums/enums-prisma-errors";
import { UniqueLoginsCreateError } from "../../../errors/prisma/unique-logins-create.error";
import { InterfaceLoginRepository } from "../../../repository/interfaces/interface-login.repository";
import bcrypt from "bcrypt";

interface LoginsCreateUseCaseRequest {
  email: string;
  password: string;
}

class LoginsCreateUseCase {
  constructor(private readonly loginsRepository: InterfaceLoginRepository) {}

  async execute({ email, password }: LoginsCreateUseCaseRequest) {
    const userExists = await this.loginsRepository.findByEmail(email);

    if(userExists){
      throw new UniqueLoginsCreateError("email");
    }

    const bcryptPassword = await bcrypt.hash(password, 10);

    const executed = await this.loginsRepository.create({
      email:email,
      password:bcryptPassword
    })

    return executed;
  }
}

export { LoginsCreateUseCase };
