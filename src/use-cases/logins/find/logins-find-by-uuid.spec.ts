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
        uuid: "abc-def-ghi"
      })
    ).toHaveProperty("uuid")
  })
})
