import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { beforeEach, describe, expect, it } from "vitest";
import { PermissionsDeleteByNameUseCase } from "./permissions-delete-by-name.usecase";
import { permissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository: MemoryPermissionsRepository;
let sut: PermissionsDeleteByNameUseCase;

describe("Permissions delete", () => {
  beforeEach(() => {
    repository = new MemoryPermissionsRepository();
    sut = new PermissionsDeleteByNameUseCase(repository);
  });

  it("Should delete a permission", async () => {
    const permission: permissions = { name: "login_user", uuid: "abc-def-ghi", createdAt: new Date() };

    const afterdata = await sut.execute({
      name: permission.name,
    });

    expect(afterdata).not.toContainEqual(permission);
  });

  it("Should not delete a inexistent permission", async () => {
    const permission: permissions = {
      name: "permission_not_exist",
      uuid: "abc-def-ghi",
      createdAt: new Date()
    };

    await expect(
      sut.execute({
        name: permission.name,
      })
    ).rejects.toBeInstanceOf(RecordNotFound);
  });
});
