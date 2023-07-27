import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { prisma } from "../../../lib/prisma.lib";

class PrismaLoginRepository implements InterfaceLoginRepository {

  async create(email: string, password: string) {
    const created = await prisma.logins.create({
      data: {
        email,
        password,
      },
    })
    
    return created;
  }
  
}

export { PrismaLoginRepository };