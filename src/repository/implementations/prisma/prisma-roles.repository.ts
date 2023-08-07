import { Prisma, roles } from "@prisma/client";
import { prisma } from "src/lib/prisma.lib";
import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

class PrismaRolesRepository implements InterfaceRolesRepository {

  async create(data: Prisma.rolesUncheckedCreateInput): Promise<roles>{
    return await prisma.roles.create({
      data:{...data}
    })
  }

  async findRoleByName(name: string): Promise<roles | null>{
    return await prisma.roles.findFirst({
      where:{
        name:name
      }
    })
  }

  async deleteRoleByName(name: string): Promise<roles> {
    return await prisma.roles.delete({
      where:{
        name:name
      }
    })
  }

}

export {PrismaRolesRepository}