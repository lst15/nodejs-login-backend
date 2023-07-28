import { PrismaPermissionsRepository } from "src/repository/implementations/prisma/prisma-permissions.repository";

interface PermissionsCreateUseCaseRequest {
  name: string;
}

class PermissionsCreateUseCase {
  constructor(private permissionsRepository: PrismaPermissionsRepository) {}
  async execute({ name }: PermissionsCreateUseCaseRequest) {
    const exists = await this.permissionsRepository.findByName(name);

    if (exists) {
      throw new Error("Permission already exists");
    }

    return await this.permissionsRepository.create(name);
  }
}

export { PermissionsCreateUseCase };