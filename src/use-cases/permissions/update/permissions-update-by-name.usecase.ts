import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

interface PermissionsUpdateByNameUseCaseRequest {
  oldname: string;
  newname: string;
}

class PermissionsUpdateByNameUseCase {
  constructor(private permissionsRepository: PrismaPermissionsRepository) {}

  async execute({ oldname,newname }: PermissionsUpdateByNameUseCaseRequest) {
    const exists = await this.permissionsRepository.findByName(oldname);

    if (!exists) {
      throw new Error("Permission not found");
    }

    return await this.permissionsRepository.updateByName(oldname,newname);
  }
}

export { PermissionsUpdateByNameUseCase };