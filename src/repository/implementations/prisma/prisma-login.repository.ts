import { InterfaceLoginRepository } from "../../interfaces/interface-login.repository";
import { prisma } from "../../../lib/prisma.lib";
import { Prisma, logins } from "@prisma/client";

class   PrismaLoginRepository implements InterfaceLoginRepository {

  async updateEmail(email: string, newemail: string): Promise<logins> {
    return await prisma.logins.update({
      where: {
        email: email
      },
      data: {
        email: newemail,
        updatedAt: new Date()
      }
    })
  }

  async updatePassword(email: string, newpassword: string): Promise<logins> {
    return await prisma.logins.update({
      where: {
        email: email
      },
      data: {
        password: newpassword,
        updatedAt: new Date()
      }
    })
  }

  async deleteByEmail(email: string) {
    return await prisma.logins.delete({
      where: {
        email: email
      },
      include:{permissions:true}
    });
  }

  async findByUuId(uuid: string): Promise<logins | null> {
    return await prisma.logins.findUnique({
      where: {
        uuid: uuid
      }
    });
  }

  async findByEmail(email: string): Promise<logins | null> {
    console.log(email,"cafe")
    return await prisma.logins.findUnique({
      where: {
        email: email
      }
    })
  }

  async create(data: Prisma.loginsUncheckedCreateInput): Promise<logins> {
    return await prisma.logins.create({
      data: {
        email: data.email,
        password: data.password
      },
    })
  }

}

export { PrismaLoginRepository };