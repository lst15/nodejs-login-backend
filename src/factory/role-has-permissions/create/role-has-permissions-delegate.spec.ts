import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { MemoryRolesRepository } from "src/repository/implementations/memory/memory-roles.repository";
import {it,describe,beforeEach,expect} from "vitest";
import { RoleHasPermissionsDelegateUseCase } from "src/use-cases/role-has-permissions/create/role-has-permissions-delegate.usecase";

let rolesRepository:MemoryRolesRepository;
let permissionsRepository:MemoryPermissionsRepository;

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsDelegateUseCase

describe("Integration testing to delegate role has permissions", () => {
  beforeEach(() => {
    rolesRepository = new MemoryRolesRepository;
    permissionsRepository = new MemoryPermissionsRepository;
    repository = new MemoryRoleHasPermissions;

    sut = new RoleHasPermissionsDelegateUseCase(
      repository,rolesRepository,permissionsRepository
    )
  })
  it("It should be able to delegate a permission to a role",async() => {
    expect(
      await sut.execute({
        role_name:"admin",
        permission_name:"register_user"
      })
    ).toHaveProperty("uuid_role")
  })
  it("It should not be able to delegate a permission to a role because it already exists",async() => {
    expect(
      await sut.execute({
        role_name:"admin",
        permission_name:"login_user"
      })
    ).toBeNull()
  })  
  it("It should not be able to delegate a permission to a role because permission not exists",async() => {
    await expect(
      sut.execute({
        role_name:"admin",
        permission_name:"not-exists"
      })
    ).rejects.toBeInstanceOf(Error)
  }) 
  it("It should not be able to delegate a permission to a role because role not exists",async() => {
    await expect(
      sut.execute({
        role_name:"not-exists",
        permission_name:"register_user"
      })
    ).rejects.toBeInstanceOf(Error)
  })
})