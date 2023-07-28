import { Prisma, logins } from "@prisma/client";

export interface InterfaceLoginRepository {
  create(data: Prisma.loginsUncheckedCreateInput): Promise<logins> | logins;
  findByEmail(email: string): Promise<logins | null> | logins | null;
}