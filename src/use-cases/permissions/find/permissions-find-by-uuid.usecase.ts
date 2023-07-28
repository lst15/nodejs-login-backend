import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

interface PermissionsFindByUuidUseCaseRequest {
  uuid: string;
}

class PermissionsFindByUuidUseCase {
  constructor(private readonly permissionsRepository: PrismaPermissionsRepository) {}
  async execute({ uuid }: PermissionsFindByUuidUseCaseRequest) {
    const permission = await this.permissionsRepository.findByUuid(uuid);
    return permission;
  }
}

export { PermissionsFindByUuidUseCase };