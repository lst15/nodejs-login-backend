import { RecordNotFound } from "src/errors/prisma/record-not-found.error";
import { InterfaceLoginHasPermissionRepository } from "src/repository/interfaces/interface-login-has-permission.repository";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";

interface FindAllLoginsByPermissionUseCaseRequest {
  permission: string;
}

class FindAllLoginsByPermissionUseCase {
  constructor(
    private loginHasPermissionRepository: InterfaceLoginHasPermissionRepository,    
    private permissionRepository: InterfacePermissionRepository
  ) {}

  async execute({permission}:FindAllLoginsByPermissionUseCaseRequest) {
    const permissionExists = await this.permissionRepository.findByName(permission);

    if (!permissionExists) {
      console.log("bugo")
      throw new RecordNotFound("permission");
    }

    return await this.loginHasPermissionRepository.getAllLoginsByPermission(permissionExists.uuid);
  }
}

export { FindAllLoginsByPermissionUseCase };