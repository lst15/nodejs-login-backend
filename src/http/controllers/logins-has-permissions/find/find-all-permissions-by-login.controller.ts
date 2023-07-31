import { Request, Response } from "express";
import { FindAllPermissionsByLoginFactory } from "src/factory/logins-has-permissions/find/find-all-permissions-by-login.factory";

const FindAllPermissionsByLogin = async (req:Request,res:Response) => {
  const {email} = req.body

  const factory = FindAllPermissionsByLoginFactory();

  try {
    await factory.execute(email)
  } catch (error:any) {
    return res.status(400).json({error: error.message})
  }

}

export {FindAllPermissionsByLogin};