import { permissions } from "@prisma/client";

export interface InterfacePermissionRepository {
  create(name:string):Promise<permissions> | permissions;
  findAll():Promise<permissions[]> | permissions[];
  findByUuid(Uuid:string):Promise<permissions | null> | permissions | null;
  deleteByName(name:string):Promise<permissions> | permissions[] | null | void;
  updateByName(oldname:string,newname:string):Promise<permissions> | permissions[] | null | void;
  findByName(name:string):Promise<permissions | null> | permissions | null;
}