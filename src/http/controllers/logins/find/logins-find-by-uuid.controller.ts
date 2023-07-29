import { QueryError } from "@enums/enums-prisma-errors";
import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsFindByUuidFactory } from "@logins-factory/find/logins-find-by-uuid.factory";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { string } from "zod";

const LoginsFindByUuidController = async (req:Request, res:Response) => {
  const { uuid } = req.query as any;
  
  const factory = LoginsFindByUuidFactory();

  try {
    const result = await factory.execute({ uuid });
    return res.status(HttpStatusCode.FOUND).json(result);    
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError && error.code == QueryError.RecordsNotFound){
      return res.status(HttpStatusCode.NOT_FOUND).json();
    }
  }

}

export { LoginsFindByUuidController };