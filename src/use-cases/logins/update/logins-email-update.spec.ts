import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import {it, describe, beforeEach, expect} from "vitest";
import { LoginsEmailUpdateUseCase } from "./logins-email-update.usecase";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository:MemoryLoginRepository;
let sut:LoginsEmailUpdateUseCase

describe("Email update login", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsEmailUpdateUseCase(repository);
  });
  
  it("Should be able to update email", async () => {
    expect(
      await sut.execute({
        email:"user2@example.com",
        newemail:"johndoe@example.com"
      })
    ).toHaveProperty("uuid")
  })
  
  it("Should not be able to update email because it doesn't exist", async () => {
    await expect(
        sut.execute({
        email:"user-not-exists@example.com",
        newemail:"johndoe@example.com"
      })
    ).rejects.toBeInstanceOf(RecordNotFound)
  })
  
  it("Should not be able to update email because it already exists", async () => {
   await expect(
      sut.execute({
        email:"user2@example.com",
        newemail:"user3@example.com"
      })      
    ).rejects.toBeInstanceOf(RecordNotFound)
  })
})