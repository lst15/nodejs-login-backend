import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface PermissionsUpdateByNameUseCaseRequest {
  oldname: string;
  newname: string;
}

class PermissionsUpdateByNameUseCase {
  constructor(private permissionsRepository: InterfacePermissionRepository) {}

  async execute({ oldname,newname }: PermissionsUpdateByNameUseCaseRequest) {
    const exists = await this.permissionsRepository.findByName(oldname);

    if (!exists) {
      throw new RecordNotFound(oldname);
    }

    return await this.permissionsRepository.updateByName(oldname,newname);
  }
}

export { PermissionsUpdateByNameUseCase };