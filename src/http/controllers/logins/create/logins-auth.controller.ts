import HttpStatusCode from "@enums/enums-status-http-code";
import { LoginsAuthFactory } from "@logins-factory/create/logins-auth.factory";
import { Request, Response } from "express";

const LoginsAuthController = async (req:Request,res:Response) => {
  const { email, password } = req.body;

  const factory = LoginsAuthFactory();

  try {
    await factory.execute({email,password});
    return res.status(HttpStatusCode.OK).json({message: "Authenthicated with Success!"});
  } catch (error:any) {
    return res.status(HttpStatusCode.CONFLICT).json({message: error.message});    
  }

}

export {LoginsAuthController};