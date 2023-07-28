import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsFindByUuidFactory } from "@logins-factory/find/logins-find-by-uuid.factory";
import { Request, Response } from "express";
import { string } from "zod";

const LoginsFindByUuidController = async (req:Request, res:Response) => {
  const { uuid } = req.query as any;
  
  const factory = LoginsFindByUuidFactory();
  const result = await factory.execute({ uuid });
  
  return res.status(HttpStatusCode.FOUND).json(result);
}

export { LoginsFindByUuidController };