import { roleHasPermissions } from "@prisma/client";
import { prisma } from "src/lib/prisma.lib";
import { InterfaceRoleHasPermissionsRepository } from "src/repository/interfaces/interface-role-has-permissions.repository";

class PrismaRoleHasPermissionsRepository implements InterfaceRoleHasPermissionsRepository {

  async delegate(uuid_role: string, uuid_permission: string): Promise<roleHasPermissions> {
    return await prisma.roleHasPermissions.create({
      data: {
        uuid_permission: uuid_permission,
        uuid_role: uuid_role
      }
    })
  }

  async findPermissionsByRole(name: string): Promise<roleHasPermissions[] | null> {
    return await prisma.roleHasPermissions.findMany({
      where: {
        roles_fk: {
          name: name
        }
      },
      include:{permissions_fk:{select:{name:true,createdAt:true}}}
    })
  }

  async findRolesByPermission(name: string): Promise<roleHasPermissions[] | null> {
    return await prisma.roleHasPermissions.findMany({
      where: {
        permissions_fk: {
          name: name
        }
      },
      include: { roles_fk: { select: { name: true, createdAt: true } } }
    })
  }

  async deleteRolePermission(role_name: string, permission_name: string) {
    return await prisma.roleHasPermissions.deleteMany({
      where: {
        AND: [
          { roles_fk: { name: role_name } },
          { permissions_fk: { name: permission_name } }
        ]
      }
    })
  }

}

export { PrismaRoleHasPermissionsRepository };