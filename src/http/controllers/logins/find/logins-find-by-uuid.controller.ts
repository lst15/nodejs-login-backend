import { QueryError } from "@enums/enums-prisma-errors";
import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsFindByUuidFactory } from "@logins-factory/find/logins-find-by-uuid.factory";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { string } from "zod";

const LoginsFindByUuidController = async (req:Request, res:Response) => {
  const { uuid } = req.params;
  
  const factory = LoginsFindByUuidFactory();

  try {
    const result = await factory.execute({ uuid });
    return res.status(HttpStatusCode.OK).json(result);    
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({error:error.message});
  }

}

export { LoginsFindByUuidController };