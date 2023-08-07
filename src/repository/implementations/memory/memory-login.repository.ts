import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { Prisma, logins } from "@prisma/client";

class MemoryLoginRepository implements InterfaceLoginRepository {
  private createdAt = new Date("2023-08-01T23:18:54.738Z");

  private logins: logins[] = [
    {
      uuid: "00000000-0000-0000-0000-000000000001",
      email: "user1@example.com",
      password: "$2b$10$vA2f3Rw5Zh2u4iCM1fI6keqiyXizk3wpTX383iNqblkrB66wRTwHu", //123
      createdAt: this.createdAt,
      updatedAt: this.createdAt,
      role:"admin"
    },
    {
      uuid: "00000000-0000-0000-0000-000000000002",
      email: "user2@example.com",
      password: "$2b$10$vA2f3Rw5Zh2u4iCM1fI6keqiyXizk3wpTX383iNqblkrB66wRTwHu", //123
      createdAt: this.createdAt,
      updatedAt: this.createdAt,
      role:"admin"
    },
    {
      uuid: "00000000-0000-0000-0000-000000000003",
      email: "user3@example.com",
      password: "$2b$10$vA2f3Rw5Zh2u4iCM1fI6keqiyXizk3wpTX383iNqblkrB66wRTwHu", //123
      createdAt: this.createdAt,
      updatedAt: this.createdAt,
      role:"admin"
    },
  ];

  updateEmail(email: string, newemail: string): logins[] | logins | null {
    const login = this.logins.find(login => login.email === email);

    this.logins.forEach(login => {
      if (login.email === email) {
        login.email = newemail;
      }
    });

    return login as logins;
  }

  updatePassword(email: string, newpassword: string): logins[] | logins | null {    

    this.logins.forEach(login => {
      if (login.email === email) {
        login.password = newpassword;
      }
    });
    
    const login = this.logins.find(login => login.email === email);
    return login as logins;
  }

  deleteByEmail(email: string) {
    const login = this.logins.find(login => login.email === email);

    this.logins = this.logins.filter(
      (login: logins) => login.email !== email
    );

    return login;
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
      createdAt: this.createdAt,
      updatedAt: this.createdAt,
      uuid: data.uuid as string,
      role:data.role
    };

    this.logins.push(login);
    return login;
  }

}

export { MemoryLoginRepository };
