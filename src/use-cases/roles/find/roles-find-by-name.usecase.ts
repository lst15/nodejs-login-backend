import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RolesFindbyNameUseCaseRequest {
  name: string
}

class RolesFindByNameUseCase {
  constructor(private rolesRepository:InterfaceRolesRepository){}

  async execute({name}:RolesFindbyNameUseCaseRequest) {
    return await this.rolesRepository.findRoleByName(name);    
  }
}

export {RolesFindByNameUseCase};