import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

interface PermissionsDeleteByNameUseCaseRequest {
  name: string;
}

class PermissionsDeleteByNameUseCase {
  constructor(private readonly permissionsRepository: PrismaPermissionsRepository) {}
  async execute({ name }: PermissionsDeleteByNameUseCaseRequest) {
    const exists = await this.permissionsRepository.findByName(name);

    if (!exists) {
      throw new Error("Permission not found");
    }
    
    return await this.permissionsRepository.deleteByName(name);
  }
}

export { PermissionsDeleteByNameUseCase };