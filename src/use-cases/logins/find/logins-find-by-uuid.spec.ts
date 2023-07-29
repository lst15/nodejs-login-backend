import { MemoryLoginRepository } from "src/repository/implementations/memory/memory-login.repository";
import { LoginsFindByUuidUseCase } from "./logins-find-by-uuid.usecase";
import { beforeEach, describe, expect, it } from "vitest";
import { RecordNotFound } from "src/errors/prisma/record-not-found.error";

let repository:MemoryLoginRepository;
let sut:LoginsFindByUuidUseCase;

describe("Find login by uuid", () => {
  beforeEach(() => {
    repository = new MemoryLoginRepository();
    sut = new LoginsFindByUuidUseCase(repository);
  });
  it("Should return login", async () => {

    const login = await sut.execute({
      uuid:"abc-def-ghi"
    });

    expect(login).toHaveProperty("uuid")
  });

  it("Should return null", async () => {
    const uuid = "abc-def-kkk"

    await expect(sut.execute({
      uuid:uuid
    })).rejects.toBeInstanceOf(RecordNotFound)
  })
})