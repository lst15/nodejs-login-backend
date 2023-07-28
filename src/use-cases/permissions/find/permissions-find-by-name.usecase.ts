import { permissions } from "@prisma/client";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

interface PermissionsFindByNameUseCaseRequest {
  name:string;
}

class PermissionsFindByNameUseCase {
  constructor(private readonly permissionsRepository: PrismaPermissionsRepository) {}
  
  async execute({ name }: PermissionsFindByNameUseCaseRequest): Promise<permissions | null> {
    const permissions = await this.permissionsRepository.findByName(name);
    
    return permissions;
  }
}

export { PermissionsFindByNameUseCase };