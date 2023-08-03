import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { Prisma, logins } from "@prisma/client";
import { uuid } from "uuidv4";

class MemoryLoginRepository implements InterfaceLoginRepository {

  updateEmail(email: string, newemail: string): logins[] | logins | null {
    const login = this.logins.find(login => login.email === email);

    this.logins.forEach(login => {
      if (login.email === email) {
        login.email = newemail;
      }
    });

    return login as logins;
  }

  updatePassword(email: string, newpassword: string): logins[] | null {
    //const login = this.logins.find(login => login.email === email);

    this.logins.forEach(login => {
      if (login.email === email) {
        login.password = newpassword;
      }
    });

    return this.logins;
  }

  deleteByEmail(email: string) {
  
    const data_modified = this.logins.filter(
      (login: logins) => login.email !== email
    );

    return data_modified;
  }

  findByUuId(uuid: string): logins | null {
    const login = this.logins.find((login) => login.uuid === uuid);

    return login as logins;
  }

  findByEmail(email: string): logins | null {
    const login = this.logins.find((login) => login.email === email);

    return login as logins;
  }

  create(data: Prisma.loginsUncheckedCreateInput) {
    const login: logins = {
      email: data.email,
      password: data.password,
      createdAt: new Date("2023-08-01T23:18:54.738Z"),
      updatedAt: new Date("2023-08-01T23:18:54.738Z"),
      uuid: uuid() as any,
    };

    this.logins.push(login);
    return login;
  }

  private logins: logins[] = [
    {
      uuid: "abc-def-ghi",
      email: "user1@example.com",
      password: "$2b$10$vA2f3Rw5Zh2u4iCM1fI6keqiyXizk3wpTX383iNqblkrB66wRTwHu", //123
      createdAt: new Date("2023-08-01T23:18:54.738Z"),
      updatedAt: new Date("2023-08-01T23:18:54.738Z"),
    },
    {
      uuid: "jkl-mno-pqr",
      email: "user2@example.com",
      password: "$2b$10$vA2f3Rw5Zh2u4iCM1fI6keqiyXizk3wpTX383iNqblkrB66wRTwHu", //123
      createdAt: new Date("2023-08-01T23:18:54.738Z"),
      updatedAt: new Date("2023-08-01T23:18:54.738Z"),
    },
    {
      uuid: "stu-vwx-yz0",
      email: "user3@example.com",
      password: "$2b$10$vA2f3Rw5Zh2u4iCM1fI6keqiyXizk3wpTX383iNqblkrB66wRTwHu", //123
      createdAt: new Date("2023-08-01T23:18:54.738Z"),
      updatedAt: new Date("2023-08-01T23:18:54.738Z"),
    },
  ];
}

export { MemoryLoginRepository };
