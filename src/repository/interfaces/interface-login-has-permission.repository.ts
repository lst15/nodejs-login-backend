import { Prisma, loginsHasPermissions } from "@prisma/client";

export interface InterfaceLoginHasPermissionRepository {
  loginHasPermission(data: Prisma.loginsHasPermissionsUncheckedCreateInput): Promise<loginsHasPermissions | null>;
  delegatePermission(data: Prisma.loginsHasPermissionsUncheckedCreateInput):Promise<loginsHasPermissions>;
  removePermission(data: Prisma.loginsHasPermissionsUncheckedCreateInput): any;
  removeAllPermissionsByLogin(uuid_login:string): any;
  removeAllLoginsByPermission(uuid_permission:string):any;  
  getAllPermissionsByLogin(uuid_login: string):Promise<loginsHasPermissions[]>;
  getAllLoginsByPermission(uuid_permission: string):Promise<loginsHasPermissions[]>;
}