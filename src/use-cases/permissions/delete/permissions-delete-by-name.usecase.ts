import { DataNotExists } from "src/errors/generics/data-not-exists.error";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface PermissionsDeleteByNameUseCaseRequest {
  name: string;
}

class PermissionsDeleteByNameUseCase {
  constructor(private readonly permissionsRepository: InterfacePermissionRepository) {}
  async execute({ name }: PermissionsDeleteByNameUseCaseRequest) {
    const exists = await this.permissionsRepository.findByName(name);

    if (!exists) {
      throw new RecordNotFound(name);
    }
    
    return await this.permissionsRepository.deleteByName(name);
  }
}

export { PermissionsDeleteByNameUseCase };