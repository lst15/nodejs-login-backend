import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { prisma } from "../../../lib/prisma.lib";
import { Prisma, logins } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";

class PrismaLoginRepository implements InterfaceLoginRepository {

  async findByEmail(email: string): Promise<logins | null> {
    const found = await prisma.logins.findUnique({
      where: {
        email: email
      }
    })

    return found;
  }

  async create(data: Prisma.loginsUncheckedCreateInput): Promise<logins> {
    const created = await prisma.logins.create({
      data: {
        email:data.email,
        password:data.password
      },      
    })
    
    return created;
  }

}

export { PrismaLoginRepository };