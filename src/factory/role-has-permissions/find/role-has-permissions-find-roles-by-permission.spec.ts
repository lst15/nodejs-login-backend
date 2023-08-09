import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { RoleHasPermissionsFindRolesByPermissionUseCase } from "src/use-cases/role-has-permissions/find/role-has-permissions-find-roles-by-permission.usecase";
import {it,describe,beforeEach,expect} from "vitest";

let permissionsRepository:MemoryPermissionsRepository;

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsFindRolesByPermissionUseCase;

describe("Integration testing to find roles by permission", () => {
  beforeEach(() => {
    permissionsRepository = new MemoryPermissionsRepository();
    repository = new MemoryRoleHasPermissions();

    sut = new RoleHasPermissionsFindRolesByPermissionUseCase(
      repository,permissionsRepository
    );
  })
  it("It should be able to return roles by permission", async () => {
    expect(
      await sut.execute({
        permission_name:"login_user"
      })
    ).toHaveLength(1)
  })
  it("It should not be able to return roles by permission because permission not exists", async () => {
    await expect(
      sut.execute({
        permission_name:"not-exists"
      })
    ).rejects.toBeInstanceOf(Error)
  })  
})