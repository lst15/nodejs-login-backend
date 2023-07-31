import { Prisma, logins } from "@prisma/client";

export interface InterfaceLoginRepository {
  create(data: Prisma.loginsUncheckedCreateInput): Promise<logins> | logins;
  updateEmail(email:string, newemail:string): Promise<logins> | logins[] | logins | null;
  updatePassword(email:string, newpassword:string): Promise<logins> | logins[] | logins | null;
  deleteByEmail(email:string):any;
  findByEmail(email: string): Promise<logins | null> | logins | null;
  findByUuId(uuid: string): Promise<logins | null> | logins | null;
}