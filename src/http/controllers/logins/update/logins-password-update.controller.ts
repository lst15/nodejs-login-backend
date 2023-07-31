import { LoginsPasswordUpdateFactory } from "@logins-factory/update/logins-password-update.factory";
import { Request, Response } from "express";

const LoginsPasswordUpdateController = async (req:Request,res:Response) => {
  const { email, newpassword } = req.body;

  const factory = LoginsPasswordUpdateFactory();

  try {
    await factory.execute({email,newpassword});
    return res.status(200).json({message: "Password changed successfully!"});
  } catch (error:any) {
    return res.status(400).json({message: error.message});    
  }

}

export { LoginsPasswordUpdateController };