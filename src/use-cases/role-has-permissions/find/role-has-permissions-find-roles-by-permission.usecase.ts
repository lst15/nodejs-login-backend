import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";

interface RoleHasPermissionsFindRolesByPermissionUseCaseRequest {
  permission_name:string;
}

class RoleHasPermissionsFindRolesByPermissionUseCase {
  constructor(private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository){}

  async execute({permission_name}:RoleHasPermissionsFindRolesByPermissionUseCaseRequest){
    return await  this.roleHasPermissionsRepository.findRolesByPermission(permission_name);
  }

}

export {RoleHasPermissionsFindRolesByPermissionUseCase};