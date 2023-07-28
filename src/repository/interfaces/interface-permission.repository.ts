import { permissions } from "@prisma/client";

export interface InterfacePermissionRepository {
  create(name:string):Promise<permissions> | permissions;
  findAll():Promise<permissions[]>;
  findByUuid(Uuid:string):Promise<permissions | null>;
  deleteByName(name:string):Promise<permissions>;
  updateByName(oldname:string,newname:string):Promise<permissions>;
  findByName(name:string):Promise<permissions | null>;
}