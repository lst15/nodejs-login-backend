import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { MemoryRolesRepository } from "src/repository/implementations/memory/memory-roles.repository";
import { RoleHasPermissionsFindPermissionsByRoleUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-permissions-by-role.usecase";
import {it,beforeEach,describe,expect} from "vitest";

let rolesRepository:MemoryRolesRepository;

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsFindPermissionsByRoleUseCase;

describe("Integration testing to permissions find by role", () => {
  beforeEach(() => {
    rolesRepository = new MemoryRolesRepository();
    repository = new MemoryRoleHasPermissions();

    sut = new RoleHasPermissionsFindPermissionsByRoleUseCase(
      repository,rolesRepository
    )
  })
  it("It should be able to return permissions by role", async() => {
    expect(
      await sut.execute({
        role_name:"admin"
      })
    ).toHaveLength(1)
  })
  it("It should not be able to return permissions by role because role not exists", async() => {
    await expect(
      sut.execute({
        role_name:"not-exists"
      })
    ).rejects.toBeInstanceOf(Error)
  })  
})