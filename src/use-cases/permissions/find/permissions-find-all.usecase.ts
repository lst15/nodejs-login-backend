import { permissions } from "@prisma/client";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

class PermissionsFindAllUseCase {
  constructor(private readonly permissionsRepository: PrismaPermissionsRepository) {}

  async execute(): Promise<permissions[]> {
    return this.permissionsRepository.findAll();
  }
}

export { PermissionsFindAllUseCase };