import { roleHasPermissions } from "@prisma/client";

interface InterfaceRoleHasPermissionsRepository {
  delegate(uuid_role:string,uuid_permission:string):Promise<roleHasPermissions> | roleHasPermissions | null;
  findPermissionsByRole(name:string):Promise<roleHasPermissions[] | null> | roleHasPermissions[] | null;
  findRolesByPermission(name:string):Promise<roleHasPermissions[] | null> | roleHasPermissions[] | null;
  deleteRolePermission(role_name:string,permission_name:string): Promise<any> | null | roleHasPermissions;
}

export {InterfaceRoleHasPermissionsRepository};