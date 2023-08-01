import { loginsHasPermissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface RemoveAllLoginByPermissionDeleteUseCaseRequest {
  permission: string;
}

class RemoveAllLoginsByPermissionDeleteUseCase {
  constructor(
    private loginHasPermissionRepository: InterfaceLoginHasPermissionRepository,    
    private permissionRepository: InterfacePermissionRepository    
  ) {}  
  
  async execute({permission}: RemoveAllLoginByPermissionDeleteUseCaseRequest) {
    const permissionExists = await this.permissionRepository.findByName(permission);

    if (!permissionExists) {
      throw new RecordNotFound(permission);
    }    

    const loginsByPermission = await this.loginHasPermissionRepository.getAllLoginsByPermission(permissionExists.uuid);

    if (loginsByPermission.length == 0) {
      throw new RecordNotFound("logins");
    }
    
    await this.loginHasPermissionRepository.removeAllLoginsByPermission(permissionExists.uuid);
    return loginsByPermission;
  }
}

export { RemoveAllLoginsByPermissionDeleteUseCase };