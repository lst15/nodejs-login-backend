import { MemoryRolesRepository } from "src/repository/implementations/memory/memory-roles.repository";
import { RolesFindByNameUseCase } from "./roles-find-by-name.usecase";
import { beforeEach, describe, expect, it } from "vitest";

let repository:MemoryRolesRepository;
let sut:RolesFindByNameUseCase;

describe("Roles Find by Name", () => {
  beforeEach(() => {
    repository = new MemoryRolesRepository;
    sut = new RolesFindByNameUseCase(repository);
  })

  it("It should be able to return a role",async() => {
    expect(
      await sut.execute({
        name:"admin"
      })
    ).toHaveProperty("uuid")
  })

  it("It should not be able to return a role because it doesnt exists",async() => {
    expect(
      await sut.execute({
        name:"role-not-exists"
      })
    ).toBeNull()
  })


})