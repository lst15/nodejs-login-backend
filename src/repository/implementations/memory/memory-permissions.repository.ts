import { permissions } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";
import { uuid } from "uuidv4";

class MemoryPermissionsRepository implements InterfacePermissionRepository {
  private permissions:permissions[] = [
    {name:"login_user",uuid:"abc-def-ghi"},
    {name:"register_user",uuid:"jkl-mno-pqr"},
    {name:"delete_user",uuid:"stu-vwx-yz0"}
  ];
  
  create(name: string): permissions {
    const permission:permissions = {
      name: name,
      uuid: uuid()
    }

    this.permissions.push(permission);
    return permission;
  }

  findAll(): permissions[] {
    return this.permissions;
  }

  findByUuid(Uuid: string): permissions | null {
    const permission = this.permissions.find(permission => permission.uuid === Uuid);

    if(!permission) {
      return null;
    }

    return permission;
  }

  deleteByName(name: string):permissions[] | null {
    const permission = this.permissions.find(permission => permission.name === name);

    if(!permission) {
      return null
    }

    const data_modified = this.permissions.filter((permission:permissions) => permission.name !== name);
    return data_modified;
  }

  updateByName(oldname: string, newname: string): permissions[] | null {
    const permission = this.permissions.find(permission => permission.name === oldname);

    if(!permission){
      return null;
    }

    this.permissions.map((permission:permissions) => {
      if(permission.name === oldname) {
        permission.name = newname;
      }
    })

    return this.permissions;
  }

  findByName(name: string): permissions | null{
    const permission = this.permissions.find(permission => permission.name === name);
    
    if(!permission) {
      return null;
    }

    return permission;
  }
  
}

export { MemoryPermissionsRepository };