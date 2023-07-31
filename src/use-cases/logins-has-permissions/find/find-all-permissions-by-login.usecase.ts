import { loginsHasPermissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface FindAllPermissionsByLoginUseCaseRequest {
  email:string;
}

class FindAllPermissionsFindByLoginUseCase {
  constructor(
    private loginHasPermissionRepository: InterfaceLoginHasPermissionRepository,
    private loginRepository: InterfaceLoginRepository,    
  ) {}

  async execute({ email }: FindAllPermissionsByLoginUseCaseRequest): Promise<loginsHasPermissions[]> {
    const userExists = await this.loginRepository.findByEmail(email);

    if (!userExists) {
      throw new RecordNotFound(email);
    }
    
    return await this.loginHasPermissionRepository.getAllPermissionsByLogin(userExists.uuid);
  }
}

export { FindAllPermissionsFindByLoginUseCase };