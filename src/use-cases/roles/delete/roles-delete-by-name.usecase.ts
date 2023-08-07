import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RolesDeleteByNameUseCaseRequest {
  name:string
}

class RolesDeleteByNameUseCase {
  constructor(private rolesRepository:InterfaceRolesRepository){}

  async execute({name}:RolesDeleteByNameUseCaseRequest) {    
    return await this.rolesRepository.deleteRoleByName(name);
  }
}

export {RolesDeleteByNameUseCase};