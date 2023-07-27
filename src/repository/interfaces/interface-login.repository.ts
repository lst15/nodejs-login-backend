import { logins } from "@prisma/client";

export interface InterfaceLoginRepository {
  create(email:string, password:string): Promise<logins>;
}