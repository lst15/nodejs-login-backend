import { UniqueLoginsCreateError } from "src/errors/prisma/unique-logins-create.error";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface PermissionsCreateUseCaseRequest {
  name: string;
}

class PermissionsCreateUseCase {
  constructor(private permissionsRepository: InterfacePermissionRepository) {}
  async execute({ name }: PermissionsCreateUseCaseRequest) {
    const exists = await this.permissionsRepository.findByName(name);

    if (exists) {
      throw new UniqueLoginsCreateError(name)
    }

    return await this.permissionsRepository.create(name);
  }
}

export { PermissionsCreateUseCase };