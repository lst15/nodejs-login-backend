import { Request, Response } from "express";
import { LoginsCreateFactory } from "../../../factory/logins/logins-create.factory";

export const LoginsCreateController = async (req:Request, res:Response) => {
  const { email, password } = req.body;

  const factory = LoginsCreateFactory();
  const executed = await factory.execute({email,password});  
  
  if(executed instanceof Error){    
    return res.status(executed.code_error).send(executed.getmessage);
  }

  return res.status(201).json(executed);
}