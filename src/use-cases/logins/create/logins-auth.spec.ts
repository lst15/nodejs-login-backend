import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import { expect, it, describe, beforeEach } from "vitest";
import { LoginsAuthUseCase } from "./logins-auth.usecase";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository: MemoryLoginRepository;
let sut: LoginsAuthUseCase;

describe("Login auth", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsAuthUseCase(repository);
  });

  it("Should be able to authenticate", async () => {
    expect(
      await sut.execute({
        email: "user2@example.com",
        password: "123",
      })
    ).toHaveProperty("uuid");
  });
  
  it("Should not be able to authenticate", async () => {
    await expect(
      sut.execute({
        email: "user2@example.com",
        password: "wrong password"
      })
    ).rejects.toBeInstanceOf(RecordNotFound)
  });
});
