import { Request,Response } from "express";
import { LoginsFindByEmailFactory } from "../../../../factory/logins/find/logins-find-by-email.factory";
import HttpStatusCode from "@enums/enums-status-http-code";

const LoginsFindByEmailController = async (req:Request, res:Response) => {
  const { email } = req.params;

  const factory = LoginsFindByEmailFactory();
  
  try {
    const result = await factory.execute({ email });
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message});
  } 
  
}

export { LoginsFindByEmailController };
