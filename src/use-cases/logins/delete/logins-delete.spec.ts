import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import { it, describe, beforeEach, expect } from "vitest";
import { LoginsDeleteUseCase } from "./logins-delete.usecase";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository: MemoryLoginRepository;
let sut: LoginsDeleteUseCase;

describe("Logins Delete", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsDeleteUseCase(repository);
  });

  it("Should be able to delete a login", async () => {    
    expect(
      await sut.execute({
        email: "user1@example.com",
      })
    ).toHaveProperty("uuid")
  });

  it("Should not be able to delete a login that does not exist", async () => {
    await expect(
      sut.execute({
        email: "user-not-exist@example.com",
      })
    ).rejects.toBeInstanceOf(RecordNotFound)
  })
});
