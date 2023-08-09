//import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";
import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";
import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RoleHasPermissionsDelegateUseCaseRequest {
  role_name:string;
  permission_name:string;
}

class RoleHasPermissionsDelegateUseCase {
  constructor(
    private roleHasPermissionsRepository:InterfaceRoleHasPermissionsRepository,
    private roleRepository:InterfaceRolesRepository,
    private permissionRepository:InterfacePermissionRepository
  ){}

  async execute({role_name,permission_name}:RoleHasPermissionsDelegateUseCaseRequest) {
    const foundPermission = await this.permissionRepository.findByName(permission_name);
    const foundRole = await this.roleRepository.findRoleByName(role_name);

    if(!foundPermission || !foundRole) {
      throw new Error("generic error")//RecordNotFound("role or permission");
    }

    return await this.roleHasPermissionsRepository.delegate(foundRole.uuid,foundPermission.uuid);
  }

}

export {RoleHasPermissionsDelegateUseCase}