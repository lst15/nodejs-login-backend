import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

interface RolesCreateUseCaseRequest {
  name: string
}

class RolesCreateUseCase {
  constructor(private rolesRepository: InterfaceRolesRepository){}

  async execute({name}:RolesCreateUseCaseRequest){
    return this.rolesRepository.create({name});
  }
}

export {RolesCreateUseCase};