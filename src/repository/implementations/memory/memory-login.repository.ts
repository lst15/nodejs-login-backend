import { GetResult } from "@prisma/client/runtime/library";
import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { Prisma, logins } from "@prisma/client";
import { uuid } from 'uuidv4';

class MemoryLoginRepository implements InterfaceLoginRepository {
  private logins:logins[] = [];

  findByEmail(email: string): logins | null {
    const login = this.logins.find(login => login.email === email);

    if(!login){
      return null;
    }

    return login
  }  

  create(data:Prisma.loginsUncheckedCreateInput) {
    
    const login:logins = {
      email: data.email,
      password: data.password,
      createdAt: new Date(),
      updatedAt: new Date(),
      uuid: uuid() as any
    }

    this.logins.push(login)
    return login;
  }
  
}

export {MemoryLoginRepository}