import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository"
import {it, beforeEach, expect, describe} from "vitest";
import { LoginsFindByUuidUseCase } from "./logins-find-by-uuid.usecase";

let repository:MemoryLoginRepository;
let sut:LoginsFindByUuidUseCase;

describe("Logins find by uuid", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsFindByUuidUseCase(repository);
  });
  
  it("Should be able to find a login by uuid", async () => {
    expect(
      await sut.execute({
        uuid: "00000000-0000-0000-0000-000000000001"
      })
    ).toHaveProperty("uuid")
  })
})
