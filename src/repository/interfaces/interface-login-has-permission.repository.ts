import { Prisma, loginsHasPermissions } from "@prisma/client";

export interface InterfaceLoginHasPermissionRepository {
  loginHasPermission(data: Prisma.loginsHasPermissionsUncheckedCreateInput): Promise<boolean>;
  delegatePermission(data: Prisma.loginsHasPermissionsUncheckedCreateInput):Promise<loginsHasPermissions>;
  removePermission(data: Prisma.loginsHasPermissionsUncheckedCreateInput):Promise<loginsHasPermissions>;  
  removeAllPermissionsByLogin(uuid_login:string): null;
  removeAllLoginsByPermission(uuid_permission:string):null;  
  getAllPermissionsByLogin(login: string):Promise<loginsHasPermissions[]>;
  getAllLoginsByPermission(permission: string):Promise<loginsHasPermissions[]>;
}