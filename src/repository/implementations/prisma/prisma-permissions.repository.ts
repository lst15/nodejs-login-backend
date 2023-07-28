import { permissions } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";
import { prisma } from "src/lib/prisma.lib";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

class PrismaPermissionsRepository implements InterfacePermissionRepository {

  async findAll(): Promise<permissions[]> {
    return await prisma.permissions.findMany();
  }

  async findByUuid(Uuid: string): Promise<permissions | null> {
    return await prisma.permissions.findUnique({
      where: {
        uuid: Uuid,
      },
    });
  }

  async deleteByName(name: string): Promise<permissions> {
    return await prisma.permissions.delete({
      where: {
        name: name,
      },
    });
  }

  async updateByName(oldname: string, newname:string): Promise<permissions> {
    return await prisma.permissions.update({
      where: {
        name: oldname,
      },
      data: {
        name: newname,
      },
    })
  }

  async findByName(name: string): Promise<permissions | null> {
    return await prisma.permissions.findUnique({
      where: {
        name: name
      }
    })
  }

  async create(name: string): Promise<permissions> {
    return await prisma.permissions.create({
      data: {
        name,
      },
    })
  }

}

export { PrismaPermissionsRepository };