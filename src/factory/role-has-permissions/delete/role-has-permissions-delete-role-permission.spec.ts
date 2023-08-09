import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { MemoryRolesRepository } from "src/repository/implementations/memory/memory-roles.repository";
import { RoleHasPermissionsDeleteRolePermissionUseCase } from "src/use-cases/role-has-permissions/delete/role-has-permissions-delete-role-permission.usecase";
import {it,beforeEach,expect,describe} from "vitest";

let rolesRepository:MemoryRolesRepository;
let permissionsRepository:MemoryPermissionsRepository;

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsDeleteRolePermissionUseCase;

describe("Integration testing to delete a role", () => {
  beforeEach(() => {
    rolesRepository = new MemoryRolesRepository;
    permissionsRepository = new MemoryPermissionsRepository;
    repository = new MemoryRoleHasPermissions;

    sut = new RoleHasPermissionsDeleteRolePermissionUseCase(
      repository,rolesRepository,permissionsRepository
    )
  })
  it("It should be able to delete a delegation", async () => {
    expect(
      await sut.execute({
        role_name:"admin",
        permission_name:"login_user"
      })
    ).toHaveProperty("uuid_role")
  })
  it("It should not be able to delete a delegation because role not exists", async () => {
    await expect(
      sut.execute({
        role_name:"not-exists",
        permission_name:"login_user"
      })
    ).rejects.toBeInstanceOf(Error)
  })
  it("It should not be able to delete a delegation because permission not exists", async () => {
    await expect(
      sut.execute({
        role_name:"admin",
        permission_name:"not-exists"
      })
    ).rejects.toBeInstanceOf(Error)
  })    
})