import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface RemoveAllPermissionByLoginDeleteUseCaseRequest {
  email:string;
}

class RemoveAllPermissionsByLoginDeleteUseCase {
  constructor(
    private loginHasPermissionRepository: InterfaceLoginHasPermissionRepository,
    private loginRepository: InterfaceLoginRepository,    
  ) {}

  async execute({email}: RemoveAllPermissionByLoginDeleteUseCaseRequest): Promise<void> {
    const userExists = await this.loginRepository.findByEmail(email);

    if (!userExists) {
      throw new RecordNotFound(email);
    }
    
    return await this.loginHasPermissionRepository.removeAllPermissionsByLogin(userExists.uuid);
  }
}

export { RemoveAllPermissionsByLoginDeleteUseCase };