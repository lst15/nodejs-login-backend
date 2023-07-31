import { Prisma, loginsHasPermissions } from "@prisma/client";
import { prisma } from "src/lib/prisma.lib";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";

class PrismaLoginHasPermission
  implements InterfaceLoginHasPermissionRepository
{
  async loginHasPermission(
    data: Prisma.loginsHasPermissionsUncheckedCreateInput
  ): Promise<loginsHasPermissions | null> {
    return await prisma.loginsHasPermissions.findFirst({
      where: {
        uuid_login: data.uuid_login,
        uuid_permission: data.uuid_permission,
      },
    });
  }

  async delegatePermission(
    data: Prisma.loginsHasPermissionsUncheckedCreateInput
  ): Promise<loginsHasPermissions> {
    return await prisma.loginsHasPermissions.create({
      data: {
        uuid_login: data.uuid_login,
        uuid_permission: data.uuid_permission,
      },
    });
  }

  async removePermission(
    data: Prisma.loginsHasPermissionsUncheckedCreateInput
  ): Promise<any> {
    return await prisma.loginsHasPermissions.deleteMany({
      where: {
        uuid_login: data.uuid_login,
        uuid_permission: data.uuid_permission,
      },
    });
  }

  async removeAllPermissionsByLogin(uuid_login: string): Promise<any> {
    return await prisma.loginsHasPermissions.deleteMany({
      where: {
        uuid_login: uuid_login,
      },
    });
  }

  async removeAllLoginsByPermission(uuid_permission: string): Promise<any> {
    return prisma.loginsHasPermissions.deleteMany({
      where: {
        uuid_permission: uuid_permission,
      },
    });
  }

  async getAllPermissionsByLogin(uuid_login: string): Promise<loginsHasPermissions[]> {
    return prisma.loginsHasPermissions.findMany({
      where: {
        uuid_login: uuid_login,
      },
    });
  }

  getAllLoginsByPermission(uuid_permission: string): Promise<loginsHasPermissions[]> {
    return prisma.loginsHasPermissions.findMany({
      where: {
        uuid_permission: uuid_permission,
      },
    });
  }
}

export { PrismaLoginHasPermission };