import { permissions, roleHasPermissions } from "@prisma/client";

interface InterfaceRoleHasPermissionsRepository {
  delegate(uuid_role:string,uuid_permission:string):Promise<roleHasPermissions>;
  findPermissionsByRole(name:string):Promise<roleHasPermissions[] | null>;
  findRolesByPermission(name:string):Promise<roleHasPermissions[] | null>;
  deleteRolePermission(role_name:string,permission_name:string): Promise<any>;
}

export {InterfaceRoleHasPermissionsRepository}