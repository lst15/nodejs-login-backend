import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";
import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RoleHasPermissionsFindPermissionsByRoleUseCaseRequest {
  role_name:string
}

class RoleHasPermissionsFindPermissionsByRoleUseCase {
  constructor(
    private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository,
    private rolesRepository:InterfaceRolesRepository,    
  ){}

  async execute({role_name}:RoleHasPermissionsFindPermissionsByRoleUseCaseRequest) {
    const foundRoles = await this.rolesRepository.findRoleByName(role_name);    
    
    if(!foundRoles) {
      throw new Error("role");
    }

    return await this.roleHasPermissionsRepository.findPermissionsByRole(foundRoles.uuid);
  }

}

export {RoleHasPermissionsFindPermissionsByRoleUseCase}