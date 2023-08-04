import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import {it, expect, describe, beforeEach} from "vitest";
import { LoginsFindByEmailUseCase } from "./logins-find-by-email.usecase";

let repository:MemoryLoginRepository;
let sut:LoginsFindByEmailUseCase;

describe("Logins Find By Email", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsFindByEmailUseCase(repository);
  });
  
  it("Should be able to find a login by email", async () => {
    expect(
      await sut.execute({
        email:"user1@example.com"
      })
    ).toHaveProperty("uuid")
  })
})