import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RolesCreateUseCaseRequest {
  name: string
}

class RolesCreateUseCase {
  constructor(private rolesRepository: InterfaceRolesRepository){}

  async execute({name}:RolesCreateUseCaseRequest){
    const created = await this.rolesRepository.create({name});
    
    if(!created){
      throw new Error("generic error")
    }

    return created;
  }
}

export {RolesCreateUseCase};