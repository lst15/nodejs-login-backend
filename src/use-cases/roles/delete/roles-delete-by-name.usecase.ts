import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RolesDeleteByNameUseCaseRequest {
  name:string
}

class RolesDeleteByNameUseCase {
  constructor(private rolesRepository:InterfaceRolesRepository){}

  async execute({name}:RolesDeleteByNameUseCaseRequest) {
    const deleted = await this.rolesRepository.deleteRoleByName(name);

    if(!deleted) {
      throw new Error("deleted generic error");
    }

    return deleted; 
  }
}

export {RolesDeleteByNameUseCase};