import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { it, expect, describe, beforeEach } from "vitest";
import { PermissionsCreateUseCase } from "./permissions-create.usecase";
import { UniqueLoginsCreateError } from "src/errors/prisma/unique-logins-create.error";

let repository: MemoryPermissionsRepository;
let sut: PermissionsCreateUseCase;

describe("Permissions usecase", () => {
  beforeEach(() => {
    repository = new MemoryPermissionsRepository();
    sut = new PermissionsCreateUseCase(repository);
  });

  it("Should be able to create a new permission", async () => {
    const permission = await sut.execute({
      name: "test",
    });

    expect(permission).toHaveProperty("uuid");
  });

  it("Should not be able to create a new permission with the same name", async () => {
    await sut.execute({
      name: "test",
    });

    await expect(
      sut.execute({
        name: "test",
      })
    ).rejects.toBeInstanceOf(UniqueLoginsCreateError);
  });
});
