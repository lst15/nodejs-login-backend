import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { prisma } from "../../../lib/prisma.lib";
import { Prisma, logins } from "@prisma/client";

class PrismaLoginRepository implements InterfaceLoginRepository {

  async findByUuId(uuid: string): Promise<logins | null> {    
    return await prisma.logins.findUnique({
      where: {
        uuid: "08553e3d-404b-40dc-af43-4030ccd67696"
      }
    });
  }

  async findByEmail(email: string): Promise<logins | null> {
    return await prisma.logins.findUnique({
      where: {
        email: email
      }
    })    
  }

  async create(data: Prisma.loginsUncheckedCreateInput): Promise<logins> {
    return await prisma.logins.create({
      data: {
        email:data.email,
        password:data.password
      },      
    })    
  }

}

export { PrismaLoginRepository };