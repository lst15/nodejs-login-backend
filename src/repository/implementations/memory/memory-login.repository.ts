import { GetResult } from "@prisma/client/runtime/library";
import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { Prisma, logins } from "@prisma/client";
import { uuid } from "uuidv4";

class MemoryLoginRepository implements InterfaceLoginRepository {
  private logins: logins[] = [
    {
      uuid: "abc-def-ghi",
      email: "user1@example.com",
      password: "<PASSWORD>",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      uuid: "jkl-mno-pqr",
      email: "user2@example.com",
      password: "<PASSWORD>",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      uuid: "stu-vwx-yz0",
      email: "user2@example.com",
      password: "<PASSWORD>",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findByUuId(uuid: string): logins | null {
    const login = this.logins.find((login) => login.uuid === uuid);

    if (!login) {
      return null;
    }

    return login;
  }

  findByEmail(email: string): logins | null {
    const login = this.logins.find((login) => login.email === email);

    if (!login) {
      return null;
    }

    return login;
  }

  create(data: Prisma.loginsUncheckedCreateInput) {
    const login: logins = {
      email: data.email,
      password: data.password,
      createdAt: new Date(),
      updatedAt: new Date(),
      uuid: uuid() as any,
    };

    this.logins.push(login);
    return login;
  }
}

export { MemoryLoginRepository };
