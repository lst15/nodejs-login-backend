import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";

interface RoleHasPermissionsDeleteRolePermissionUseCaseRequest {
  role_name:string;
  permission_name:string;
}

class RoleHasPermissionsDeleteRolePermissionUseCase {
  constructor(private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository){}

  async execute({role_name,permission_name}:RoleHasPermissionsDeleteRolePermissionUseCaseRequest){
    return await this.roleHasPermissionsRepository.deleteRolePermission(role_name,permission_name);
  }

}

export {RoleHasPermissionsDeleteRolePermissionUseCase};
