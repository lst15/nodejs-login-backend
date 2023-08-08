import { Prisma, roles } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";
import { InterfaceRolesRepository } from "src/repository/interfaces/interface-roles.repository";

class MemoryRolesRepository implements InterfaceRolesRepository {
  private createdAt = new Date("2023-08-01T23:18:54.738Z");
  private roles:roles[] = [
    {
      name:"admin",
      uuid:"00000000-0000-0000-0000-000000000100",
      createdAt:this.createdAt
    }
  ] 

  create(data: Prisma.rolesUncheckedCreateInput): roles | null{
    const find = this.roles.find(role => role.name == data.name);

    if(find){
      return null;
    }

    const role:roles = {
      uuid:`00000000-0000-0000-0000-00000000000${this.roles.length + 1}00`,
      name:data.name,
      createdAt:this.createdAt
    }

    this.roles.push(role);
    return role;
  }

  findRoleByName(name: string): roles | null{
    const role =  this.roles.find(role => role.name == name)

    if(!role){
      return null;
    }

    return role;
  }

  deleteRoleByName(name: string): roles | null{
    const role =  this.roles.find(role => role.name == name);

    if(!role){
      return null;
    }

    this.roles = this.roles.filter((role:roles) => 
      role.name != name
    )

    return role;
  }

}

export {MemoryRolesRepository};