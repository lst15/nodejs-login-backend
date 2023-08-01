import { permissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

class PermissionsFindAllUseCase {
  constructor(private readonly permissionsRepository: PrismaPermissionsRepository) {}

  async execute(): Promise<permissions[]> {
    const permissions = await this.permissionsRepository.findAll();
    
    if(!permissions){
      throw new RecordNotFound("permissions")
    }

    return permissions;
  }
}

export { PermissionsFindAllUseCase };