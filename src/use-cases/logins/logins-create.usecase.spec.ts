import {expect, it, describe, beforeEach} from "vitest";
import { MemoryLoginRepository } from "../../repository/implementations/memory/memory-login.repository";
import { LoginsCreateUseCase } from "./logins-create.usecase";
import { UniqueLoginsCreateError } from "../../errors/prisma/unique-logins-create.error";

let repository: MemoryLoginRepository;
let sut:LoginsCreateUseCase;

describe("Logins use case", () => {

  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsCreateUseCase(repository);
  });

  it("Should be able to create a new login", async () => {
    const login = await sut.execute({
      email: "johndoe@example.com",
      password: "johndoe123@",
    })

    expect(login).toHaveProperty("uuid");
  })
  
  it("Should not be able to create a new login with the same email", async () => {
    const email = "johndoe@example.com";
    const password = "johndoe123@";

    await sut.execute({
      email: email,
      password: password,
    })
    
    await expect(() => sut.execute({
      email: email,
      password: password,
    })).rejects.toBeInstanceOf(UniqueLoginsCreateError);
  })
})