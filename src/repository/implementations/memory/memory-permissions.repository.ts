import { permissions } from "@prisma/client";
import { InterfacePermissionRepository } from "src/repository/interfaces/interface-permission.repository";
import { uuid } from "uuidv4";

class MemoryPermissionsRepository implements InterfacePermissionRepository {
  private createdAt = new Date("2023-08-01T23:18:54.738Z");

  private permissions:permissions[] = [
    {name:"login_user",uuid:"00000000-0000-0000-0000-000000000010",createdAt: this.createdAt},
    {name:"register_user",uuid:"00000000-0000-0000-0000-000000000020",createdAt: this.createdAt},
    {name:"delete_user",uuid:"00000000-0000-0000-0000-000000000030",createdAt: this.createdAt},    
  ];
  
  
  create(name: string): permissions {
    const permission:permissions = {
      name: name,
      uuid: uuid(),
      createdAt: this.createdAt
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
 
    const data_modified = this.permissions.filter((permission:permissions) => permission.name !== name);
    return data_modified;
  }

  updateByName(oldname: string, newname: string): permissions[] | null {

    this.permissions.forEach(permission => {
      if(permission.name === oldname) {
        permission.name = newname;
      }      
    });

    return this.permissions;
  }

  findByName(name: string): permissions | null{
    const permission = this.permissions.find(permission => permission.name === name);
    return permission as permissions;
  }
  
}

export { MemoryPermissionsRepository };