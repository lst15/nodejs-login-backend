import { Prisma, roles } from "@prisma/client"

interface InterfaceRolesRepository {
  create(data: Prisma.rolesUncheckedCreateInput):Promise<roles>
  findRoleByName(name:string):Promise<roles | null>
  deleteRoleByName(name: string):Promise<roles>
}

export {InterfaceRolesRepository};