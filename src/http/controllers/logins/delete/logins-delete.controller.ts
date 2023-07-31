import { LoginsDeleteFactory } from "@logins-factory/delete/logins-delete.factory";
import { Request, Response } from "express";

const LoginsDeleteController = async (req:Request,res:Response) => {
  const { email } = req.params;

  const factory = LoginsDeleteFactory()

  try {
    await factory.execute({email})
    return res.status(204).json({message: "Email was deleted with success!"})
  } catch (error:any) {
    return res.status(400).json({message: error.message})    
  }

}

export { LoginsDeleteController };