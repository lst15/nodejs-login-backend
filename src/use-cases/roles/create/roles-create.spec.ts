import { MemoryRolesRepository } from "src/repository/implementations/memory/memory-roles.repository";
import {it,describe,beforeEach,expect} from "vitest";
import { RolesCreateUseCase } from "./roles-create.usecase";

let repository:MemoryRolesRepository;
let sut:RolesCreateUseCase;

describe("Roles create", () => {
  beforeEach(() => {
    repository = new MemoryRolesRepository();
    sut = new RolesCreateUseCase(repository);
  })

  it("It should be able to create a new role", async() => {
    expect(
      await sut.execute({
        name:"member"
      })
    ).toHaveProperty("uuid")
  })

  it("It should not be able to create a new role because it exists", async() => {
    await expect(
      sut.execute({
        name:"admin"
      })
    ).rejects.toBeInstanceOf(Error)
  })

})