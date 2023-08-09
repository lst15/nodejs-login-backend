import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";
import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";
import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RoleHasPermissionsDeleteRolePermissionUseCaseRequest {
  role_name:string;
  permission_name:string;
}

class RoleHasPermissionsDeleteRolePermissionUseCase {
  constructor(
    private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository,
    private rolesRepository:InterfaceRolesRepository,
    private permissionsRepository:InterfacePermissionRepository
  ){}

  async execute({role_name,permission_name}:RoleHasPermissionsDeleteRolePermissionUseCaseRequest){
    const foundRoles = await this.rolesRepository.findRoleByName(role_name);
    const foundPermission = await this.permissionsRepository.findByName(permission_name);
    
    if(!foundRoles || !foundPermission) {
      throw new Error("role or permission");
    }

    return await this.roleHasPermissionsRepository.deleteRolePermission(foundRoles.uuid,foundPermission.uuid);
  }

}

export {RoleHasPermissionsDeleteRolePermissionUseCase};
