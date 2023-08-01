import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import {expect, it, describe, beforeEach} from "vitest";
import { PermissionsFindByNameUseCase } from "./permissions-find-by-name.usecase";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository:MemoryPermissionsRepository;
let sut:PermissionsFindByNameUseCase;;

describe("Permissions find by name", () => {
  beforeEach(() => {
    repository = new MemoryPermissionsRepository();
    sut = new PermissionsFindByNameUseCase(repository);
  });
  
  it("Should return a permission", async () => {
    const permission = await sut.execute({name: "login_user"});
    expect(permission).toHaveProperty("uuid");
  });
  
  it("Should return error if permission not found", async () => {
    await expect(
      sut.execute({name: "not_found"})
    ).rejects.toBeInstanceOf(RecordNotFound)
  });
})