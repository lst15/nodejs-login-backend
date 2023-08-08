import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { RoleHasPermissionsFindRolesByPermissionUseCase } from "./role-has-permissions-find-roles-by-permission.usecase";
import { beforeEach, describe, expect, it } from "vitest";

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsFindRolesByPermissionUseCase;

describe("Find permissions that roles are using", () => {
  beforeEach(() => {
    repository = new MemoryRoleHasPermissions;
    sut = new RoleHasPermissionsFindRolesByPermissionUseCase(repository);
  })

  it("It should be able to find every roles that uses an specific permission", async ()=> {
    expect(
      await sut.execute({
        permission_name:"login_user"
      }) 
    ).toHaveLength(1)
  })

  it("It should not be able to find every roles that uses an specific permission because it doesnt exists", async ()=> {
    expect(
      await sut.execute({
        permission_name:"not-exists"
      }) 
    ).toBeNull()
  })
})