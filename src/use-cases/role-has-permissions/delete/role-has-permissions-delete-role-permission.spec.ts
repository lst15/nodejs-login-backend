import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { RoleHasPermissionsDeleteRolePermissionUseCase } from "./role-has-permissions-delete-role-permission.usecase";
import { beforeEach, describe, expect, it } from "vitest";

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsDeleteRolePermissionUseCase;

describe("Delete a permission of a role", () => {
  beforeEach(() => {
    repository = new MemoryRoleHasPermissions;
    sut = new RoleHasPermissionsDeleteRolePermissionUseCase(repository);
  })
  it("It should be able to delete a permission of a role", async () => {
    expect(
      await sut.execute({
        role_name:"admin",
        permission_name:"login_user"
      })
    ).toHaveProperty("uuid_role")
  })

  it("It should not be able to delete a permission of a role because role not exists", async () => {
    expect(
      await sut.execute({
        role_name:"not-exist",
        permission_name:"login_user"
      })
    ).toBeNull()
  })


  it("It should not be able to delete a permission of a role because permission not exists", async () => {
    expect(
      await sut.execute({
        role_name:"admin",
        permission_name:"not-exists"
      })
    ).toBeNull()
  })

})