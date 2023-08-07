import { Prisma, roles } from "@prisma/client"

interface InterfaceRolesRepository {
  create(data: Prisma.rolesUncheckedCreateInput):Promise<roles> | roles | null;
  findRoleByName(name:string):Promise<roles | null> | roles | null
  deleteRoleByName(name: string):Promise<roles> | roles | null
}

export {InterfaceRolesRepository};