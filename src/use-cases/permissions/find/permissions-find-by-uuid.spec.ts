import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { expect, it, describe, beforeEach } from "vitest";
import { PermissionsFindByUuidUseCase } from "./permissions-find-by-uuid.usecase";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository: MemoryPermissionsRepository;
let sut: PermissionsFindByUuidUseCase;

describe("Permissions find by uuid", () => {
  beforeEach(() => {
    repository = new MemoryPermissionsRepository();
    sut = new PermissionsFindByUuidUseCase(repository);
  });

  it("Should be able to find a permission by uuid", async () => {
    expect(
      await sut.execute({
        uuid: "00000000-0000-0000-0000-000000000010",
      })
    );
  });
  
  it("Should not be able to find a permission by uuid", async () => {
    await expect(
      sut.execute({
        uuid: "xxx-xxx-xxx",
      })
    ).rejects.toBeInstanceOf(RecordNotFound);
  });
});
