import { MemoryRoleHasPermissions } from "src/repository/implementations/memory/memory-role-has-permissions.repository";
import { RoleHasPermissionsDelegateUseCase } from "./role-has-permissions-delegate.usecase";
import { beforeEach, describe, expect, it } from "vitest";

let repository:MemoryRoleHasPermissions;
let sut:RoleHasPermissionsDelegateUseCase;

describe("Delegate permission", () => {
  beforeEach(() => {
    repository = new MemoryRoleHasPermissions();
    sut = new RoleHasPermissionsDelegateUseCase(repository);
  })

  it("It should be able to create a new delegate permission to role", async() => {
    expect(
      await sut.execute({
        uuid_permission:"00000000-0000-0000-0000-000000000020",
        uuid_role:"00000000-0000-0000-0000-000000000100"
      })
    ).toHaveProperty("uuid_role")
  })

  it("It should not be able to create a new delegate permission to role because permissions doesnt exists", async() => {
    expect(
      await sut.execute({
        uuid_permission:"00000000-0000-0000-0000-000000000030",
        uuid_role:"00000000-0000-0000-0000-000000000100"
      })
    ).toBeNull()
  })

  it("It should not be able to create a new delegate permission to role because role doesn exists", async() => {
    expect(
      await sut.execute({
        uuid_permission:"00000000-0000-0000-0000-000000000020",
        uuid_role:"00000000-0000-0000-0000-000000000300"
      })
    ).toBeNull()
  })

  it("It should not be able to create a new delegate permission to role because it already exists", async() => {
    expect(
      await sut.execute({
        uuid_permission:"00000000-0000-0000-0000-000000000010",
        uuid_role:"00000000-0000-0000-0000-000000000100"
      })
    ).toBeNull()
  })

})