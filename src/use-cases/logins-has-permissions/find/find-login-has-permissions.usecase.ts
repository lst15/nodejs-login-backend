import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface FindLoginHasPermissionsUseCaseRequest {
  email: string;
  permission: string;
}

class FindLoginHasPermissionUseCase {
  constructor(
    private loginHasPermissionRepository: InterfaceLoginHasPermissionRepository,
    private loginRepository: InterfaceLoginRepository,
    private permissionRepository: InterfacePermissionRepository
  ) { }

  async execute({ email, permission }: FindLoginHasPermissionsUseCaseRequest) {
    const userExists = await this.loginRepository.findByEmail(email);

    if (!userExists) {
      throw new RecordNotFound(email);
    }

    const permissionExists = await this.permissionRepository.findByName(permission);

    if (!permissionExists) {
      throw new RecordNotFound(permission);
    }

    const loginHasPermission = await this.loginHasPermissionRepository.loginHasPermission({
      uuid_login:userExists.uuid,
      uuid_permission:permissionExists.uuid
    });
    
    if(!loginHasPermission){
      return false;
    }

    return true;
  }
}

export { FindLoginHasPermissionUseCase };