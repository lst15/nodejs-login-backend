import { MemoryPermissionsRepository } from "src/repository/implementations/memory/memory-permissions.repository";
import { PermissionsUpdateByNameUseCase } from "./permissions-update-by-name.usecase";
import { beforeEach, describe, expect, it } from "vitest";
import { permissions } from "@prisma/client";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository: MemoryPermissionsRepository;
let sut: PermissionsUpdateByNameUseCase;

describe("Permissions update", () => {
  beforeEach(() => {
    repository = new MemoryPermissionsRepository();
    sut = new PermissionsUpdateByNameUseCase(repository);
  });

  it("should update a permission", async () => {
    const permission: permissions = { 
      name: "login_user", 
      uuid: "abc-def-ghi", 
      createdAt: new Date("2023-08-01T23:18:54.738Z")
    };
    const newname = "signin_user";

    const afterdata = await sut.execute({
      oldname: permission.name,
      newname: newname,
    });

    expect(afterdata).toContainEqual({ name: newname, uuid: permission.uuid, createdAt: permission.createdAt });
  });

  it("should not update a permission", async () => {
    const permission: permissions = {
      name: "permission_not_exist",
      uuid: "abc-def-ghi",
      createdAt: new Date("2023-08-01T23:18:54.738Z")
    };
    const newname = "signin_user";

    await expect(
      sut.execute({
        oldname: permission.name,
        newname: newname,
      })
    ).rejects.toBeInstanceOf(RecordNotFound);
  });
});
