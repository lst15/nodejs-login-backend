import { permissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

class PermissionsFindAllUseCase {
  constructor(private readonly permissionsRepository: InterfacePermissionRepository) {}

  async execute(): Promise<permissions[]> {
    const permissions = await this.permissionsRepository.findAll();
    return permissions;
  }
}

export { PermissionsFindAllUseCase };