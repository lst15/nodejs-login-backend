import { Request,Response } from "express";
import { LoginsCreateFactory } from "../../../../factory/logins/create/logins-create.factory";
import { LoginsFindByEmailFactory } from "../../../../factory/logins/find/logins-find-by-email.factory";

export const LoginsFindByEmailController = async (req:Request, res:Response) => {
  const { email } = req.body;

  const factory = LoginsFindByEmailFactory();
  const result = await factory.execute({ email });
  

    res.status(200).json(result);
}