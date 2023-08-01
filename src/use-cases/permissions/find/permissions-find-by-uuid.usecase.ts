import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface PermissionsFindByUuidUseCaseRequest {
  uuid: string;
}

class PermissionsFindByUuidUseCase {
  constructor(private readonly permissionsRepository: InterfacePermissionRepository) {}
  async execute({ uuid }: PermissionsFindByUuidUseCaseRequest) {
    const permission = await this.permissionsRepository.findByUuid(uuid);

    if(!permission) {
      throw new RecordNotFound("permission")
    }
    
    return permission;
  }
}

export { PermissionsFindByUuidUseCase };