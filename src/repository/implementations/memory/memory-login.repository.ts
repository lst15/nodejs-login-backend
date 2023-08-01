import { GetResult } from "@prisma/client/runtime/library";
import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { Prisma, logins } from "@prisma/client";
import { uuid } from "uuidv4";

class MemoryLoginRepository implements InterfaceLoginRepository {

  updateEmail(email: string, newemail: string): logins[] | null {
    const login = this.logins.find(login => login.email === email);

    if(!login){
      return null;
    }

    this.logins.forEach(login => {
      if(login.email === email) {
        login.email = newemail;
      }      
    });

    return this.logins;
  }

  updatePassword(email: string, newpassword: string): logins[] | null{
    const login = this.logins.find(login => login.email === email);

    if(!login){
      return null;
    }

    this.logins.forEach(login => {
      if(login.email === email) {
        login.password = newpassword;
      }      
    });

    return this.logins;
  }

  deleteByEmail(email: string) {
    const login = this.logins.find(
      (login) => login.email === email
    );

    if (!login) {
      return null;
    }

    const data_modified = this.logins.filter(
      (login: logins) => login.email !== email
    );

    return data_modified;
  }

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
}

export { MemoryLoginRepository };
