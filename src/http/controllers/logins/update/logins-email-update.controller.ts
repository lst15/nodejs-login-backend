import { LoginsEmailUpdateFactory } from "@logins-factory/update/logins-email-update.factory";
import { Request, Response } from "express";

const LoginsEmailUpdateController = async (req:Request,res:Response) => {
  const { email, newemail } = req.body;

  const factory = LoginsEmailUpdateFactory();

  try {
    await factory.execute({email,newemail})
    return res.status(200).json({message: "Email changed with success!"});
  } catch (error:any) {
    return res.status(400).json({message: error.message});    
  }

}

export { LoginsEmailUpdateController };