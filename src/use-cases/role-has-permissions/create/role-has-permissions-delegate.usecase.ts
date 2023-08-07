import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";

interface RoleHasPermissionsDelegateUseCaseRequest {
  uuid_role:string;
  uuid_permission:string;
}

class RoleHasPermissionsDelegateUseCase {
  constructor(private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository){}

  async execute({uuid_role,uuid_permission}:RoleHasPermissionsDelegateUseCaseRequest) {
    return await this.roleHasPermissionsRepository.delegate(uuid_role,uuid_permission);
  }

}

export {RoleHasPermissionsDelegateUseCase}