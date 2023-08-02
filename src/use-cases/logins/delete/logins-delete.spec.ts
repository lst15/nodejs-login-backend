import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import { it, describe, beforeEach, expect } from "vitest";
import { LoginsDeleteUseCase } from "./logins-delete.usecase";

let repository: MemoryLoginRepository;
let sut: LoginsDeleteUseCase;

describe("Logins Delete", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsDeleteUseCase(repository);
  });

  it("Should be able to delete a login", async () => {
    const email = "user1@example.com"
    expect(
      await sut.execute({
        email: email,
      })
    ).not.toContainEqual(email);
  });
});
