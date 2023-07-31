import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";
import { InterfaceLoginRepository } from "src/repository/interfaces/interface-login.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface FindAllLoginsByPermissionUseCaseRequest {
  permission: string;
}

class FindAllLoginsByPermissionUseCase {
  constructor(
    private loginHasPermissionRepository: InterfaceLoginHasPermissionRepository,
    private loginRepository: InterfaceLoginRepository,
    private permissionRepository: InterfacePermissionRepository
  ) {}

  async execute({permission}:FindAllLoginsByPermissionUseCaseRequest) {
    const permissionExists = await this.permissionRepository.findByName(permission);

    if (!permissionExists) {
      throw new RecordNotFound(permission);
    }

    return await this.loginHasPermissionRepository.getAllLoginsByPermission(permissionExists.uuid);
  }
}

export { FindAllLoginsByPermissionUseCase };