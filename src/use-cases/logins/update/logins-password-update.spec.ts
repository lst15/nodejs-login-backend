import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import {it, describe, beforeEach, expect} from "vitest";
import { LoginsPasswordUpdateUseCase } from "./logins-password-update.usecase";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository:MemoryLoginRepository;
let sut:LoginsPasswordUpdateUseCase;

describe("Logins password update", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsPasswordUpdateUseCase(repository);
  });
  
  it("Should be able to update password", async () => {
    expect(
      await sut.execute({
        email: "user2@example.com",
        newpassword: "1234"
      })
    ).toHaveProperty("uuid")
  })
  
  it("Should not be able to update password because it doesn't exist", async () => {
    await expect(
      sut.execute({
        email: "user-not-exists@example.com",
        newpassword: "1234"
      })
    ).rejects.toBeInstanceOf(RecordNotFound)
  })
})