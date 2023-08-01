import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsEmailUpdateFactory } from "@logins-factory/update/logins-email-update.factory";
import { Request, Response } from "express";

const LoginsEmailUpdateController = async (req:Request,res:Response) => {
  const { email, newemail } = req.body;

  const factory = LoginsEmailUpdateFactory();

  try {
    const result = await factory.execute({email,newemail})
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message});    
  }

}

export { LoginsEmailUpdateController };