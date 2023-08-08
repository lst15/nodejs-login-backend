import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { RoleHasPermissionsFindPermissionsByRoleUseCase } from "./role-has-permissions-find-permissions-by-role.usecase";
import { beforeEach, describe, expect, it } from "vitest";

let repository: MemoryRoleHasPermissions;
let sut: RoleHasPermissionsFindPermissionsByRoleUseCase;

describe("Find permissions of a role", () => {
  beforeEach(() => {
    repository = new MemoryRoleHasPermissions();
    sut = new RoleHasPermissionsFindPermissionsByRoleUseCase(repository);
  });
  it("It should be able to returns every permissions of a role", async () => {
    expect(
      await sut.execute({
        role_name: "admin",
      })
    ).toHaveLength(1);
  });

  it("It should not be able to returns every permissions of a role because role not exists", async () => {
    expect(
      await sut.execute({
        role_name: "not-exists",
      })
    ).toBeNull()
  });

});
