import { permissions, roleHasPermissions, roles } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";
import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";
import { RoleHasPermissionsFindPermissionsByRoleUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-permissions-by-role.usecase";

class MemoryRoleHasPermissions implements InterfaceRoleHasPermissionsRepository {
  private createdAt = new Date("2023-08-01T23:18:54.738Z");

  private permissions:permissions[] = [
    {name:"login_user",uuid:"00000000-0000-0000-0000-000000000010",createdAt: this.createdAt},
    {name:"ban_user",uuid:"00000000-0000-0000-0000-000000000020",createdAt: this.createdAt} 
  ];
  
  private roles:roles[] = [
    {
      name:"admin",
      uuid:"00000000-0000-0000-0000-000000000100",
      createdAt:this.createdAt
    }
  ] 

  private roleHasPermissions:roleHasPermissions[] = [
    {
      uuid_role:"00000000-0000-0000-0000-000000000100",
      uuid_permission:"00000000-0000-0000-0000-000000000010",
      createdAt:this.createdAt
    }
  ]

  delegate(uuid_role: string, uuid_permission: string): roleHasPermissions | null {
    const foundRole = this.roles.find(role => role.uuid == uuid_role);
    const foundPermission = this.permissions.find(permission => permission.uuid == uuid_permission);

    if(!foundRole || !foundPermission){
      return null;
    }

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

  findPermissionsByRole(name: string): roleHasPermissions[] | null{
    const foundRole = this.roles.find(role => role.name == name);
    
    if(!foundRole){
      return null;
    }

    return this.roleHasPermissions.filter(roleHasPermission => roleHasPermission.uuid_role == foundRole.uuid);    
  }

  findRolesByPermission(name: string): roleHasPermissions[] | null{
    const foundPermission = this.permissions.find(permission => permission.name == name);

    if(!foundPermission) {
      return null;
    }

    return this.roleHasPermissions.filter(roleHasPermission => roleHasPermission.uuid_permission == foundPermission.uuid);
  }

  deleteRolePermission(role_name: string, permission_name: string): roleHasPermissions | null {
    const foundRole = this.roles.find(role => role.name == role_name);
    const foundPermission = this.permissions.find(permission => permission.name == permission_name);

    if(!foundRole || !foundPermission){
      return null;
    }

    const found = this.roleHasPermissions.find(
      roleHasPermissions =>
        roleHasPermissions.uuid_role == foundRole.uuid &&
        roleHasPermissions.uuid_permission == foundPermission.uuid
    );

    this.roleHasPermissions = this.roleHasPermissions.filter(
      roleHasPermission =>         
        roleHasPermission.uuid_permission != foundPermission.uuid
    )
    
    return found as roleHasPermissions;
  }

}
export {MemoryRoleHasPermissions};