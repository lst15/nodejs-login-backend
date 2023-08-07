import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";

interface RoleHasPermissionsFindPermissionsByRoleUseCaseRequest {
  role_name:string
}

class RoleHasPermissionsFindPermissionsByRoleUseCase {
  constructor(private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository){}

  async execute({role_name}:RoleHasPermissionsFindPermissionsByRoleUseCaseRequest) {
    return await this.roleHasPermissionsRepository.findPermissionsByRole(role_name);
  }

}

export {RoleHasPermissionsFindPermissionsByRoleUseCase}