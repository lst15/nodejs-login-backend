import { roleHasPermissions } from "@prisma/client";

interface RoleHasPermissionsRepository {
  delegate(uuid_role:string,uuid_permission:string):Promise<roleHasPermissions>;
  findPermissionsByRole(name:string):Promise<roleHasPermissions[] | null>;
  findRolesByPermission(name:string):Promise<roleHasPermissions[] | null>;
  deleteRolePermission(uuid_role:string,uuid_permission:string): Promise<roleHasPermissions>;
}

export {RoleHasPermissionsRepository}