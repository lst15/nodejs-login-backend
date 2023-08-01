import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import {it,expect,describe, beforeEach} from "vitest";
import { PermissionsFindAllUseCase } from "./permissions-find-all.usecase";

let repository:MemoryPermissionsRepository;
let sut:PermissionsFindAllUseCase;

describe("Find all permission", () => {
  beforeEach(() => {
    repository = new MemoryPermissionsRepository();
    sut = new PermissionsFindAllUseCase(repository);
  });

  it("Should return all permissions", async () => {
    const permissions = await sut.execute();
    expect(permissions).toHaveLength(3);
  });
})