import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsDeleteFactory } from "@logins-factory/delete/logins-delete.factory";
import { Request, Response } from "express";

const LoginsDeleteController = async (req:Request,res:Response) => {
  const { email } = req.body;

  const factory = LoginsDeleteFactory()

  try {
    const result = await factory.execute({email})
    return res.status(HttpStatusCode.OK).json(result)
  } catch (error:any) {
    return res.status(HttpStatusCode.CONFLICT).json({message: error.message})    
  }

}

export { LoginsDeleteController };