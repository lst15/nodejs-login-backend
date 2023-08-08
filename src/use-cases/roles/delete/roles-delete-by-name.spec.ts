import { MemoryRolesRepository } from "src/repository/implementations/memory/memory-roles.repository";
import {it, beforeEach, expect, describe} from "vitest";
import { RolesDeleteByNameUseCase } from "./roles-delete-by-name.usecase";

let repository:MemoryRolesRepository;
let sut:RolesDeleteByNameUseCase;

describe("Roles Delete By Name", () => {
  beforeEach(() => {
    repository = new MemoryRolesRepository();
    sut = new RolesDeleteByNameUseCase(repository);
  })

  it("It should be able to delete a permission by name", async () => {
    expect(
      await sut.execute({
        name:"admin"
      })
    ).toHaveProperty("uuid")
  })

  it("It should not be able to delete a permission by name because it doesnt exists", async () => {
    await expect(
      sut.execute({
        name:"permission-not-exists"
      })
    ).rejects.toBeInstanceOf(Error)
  })

})