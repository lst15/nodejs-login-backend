import { permissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface PermissionsFindByNameUseCaseRequest {
  name:string;
}

class PermissionsFindByNameUseCase {
  constructor(private readonly permissionsRepository: InterfacePermissionRepository) {}
  
  async execute({ name }: PermissionsFindByNameUseCaseRequest): Promise<permissions | null> {
    const permission = await this.permissionsRepository.findByName(name);
    
    if(!permission){
      throw new RecordNotFound("permission");
    }

    return permission;
  }
}

export { PermissionsFindByNameUseCase };