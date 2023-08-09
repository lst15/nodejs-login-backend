import { permissions, roleHasPermissions, roles } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";
import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";
import { RoleHasPermissionsFindPermissionsByRoleUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-permissions-by-role.usecase";

class MemoryRoleHasPermissions implements InterfaceRoleHasPermissionsRepository {
  private createdAt = new Date("2023-08-01T23:18:54.738Z");

  private roleHasPermissions:roleHasPermissions[] = [
    {
      uuid_role:"00000000-0000-0000-0000-000000000100",
      uuid_permission:"00000000-0000-0000-0000-000000000010",
      createdAt:this.createdAt
    }
  ]

  delegate(uuid_role: string, uuid_permission: string): roleHasPermissions | null {

    const found = this.roleHasPermissions.find(
      roleHasPermissions =>
        roleHasPermissions.uuid_role == uuid_role &&
        roleHasPermissions.uuid_permission == uuid_permission
    );

    if(found){
      return null;
    }

    const roleHasPermission:roleHasPermissions = {
      uuid_role:uuid_role,
      uuid_permission:uuid_permission,
      createdAt:this.createdAt
    }
    
    this.roleHasPermissions.push(roleHasPermission);
    return roleHasPermission;
  }

  findPermissionsByRole(uuid_role: string): roleHasPermissions[] | null{
    return this.roleHasPermissions.filter(roleHasPermission => roleHasPermission.uuid_role == uuid_role);    
  }

  findRolesByPermission(uuid_permission: string): roleHasPermissions[] | null{    
    return this.roleHasPermissions.filter(roleHasPermission => roleHasPermission.uuid_permission == uuid_permission);
  }

  deleteRolePermission(uuid_role: string, uuid_permission: string): roleHasPermissions | null {

    const found = this.roleHasPermissions.find(
      roleHasPermissions =>
        roleHasPermissions.uuid_role == uuid_role &&
        roleHasPermissions.uuid_permission == uuid_permission
    );

    this.roleHasPermissions = this.roleHasPermissions.filter(
      roleHasPermission =>         
        roleHasPermission.uuid_permission != uuid_permission
    )
    
    return found as roleHasPermissions;
  }

}
export {MemoryRoleHasPermissions};