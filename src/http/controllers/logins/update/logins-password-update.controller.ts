import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsPasswordUpdateFactory } from "@logins-factory/update/logins-password-update.factory";
import { Request, Response } from "express";

const LoginsPasswordUpdateController = async (req:Request,res:Response) => {
  const { email, newpassword } = req.body;

  const factory = LoginsPasswordUpdateFactory();

  try {
    await factory.execute({email,newpassword});
    return res.status(HttpStatusCode.OK).json();
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message});    
  }

}

export { LoginsPasswordUpdateController };