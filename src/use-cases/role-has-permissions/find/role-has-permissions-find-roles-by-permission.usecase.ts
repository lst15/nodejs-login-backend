import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";
import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";

interface RoleHasPermissionsFindRolesByPermissionUseCaseRequest {
  permission_name:string;
}

class RoleHasPermissionsFindRolesByPermissionUseCase {
  constructor(
    private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository,    
    private permissionsRepository:InterfacePermissionRepository
  ){}
  async execute({permission_name}:RoleHasPermissionsFindRolesByPermissionUseCaseRequest){    
    const foundPermission = await this.permissionsRepository.findByName(permission_name);
    
    if(!foundPermission) {
      throw new Error("permission");
    }

    return await  this.roleHasPermissionsRepository.findRolesByPermission(foundPermission.uuid);
  }

}

export {RoleHasPermissionsFindRolesByPermissionUseCase};