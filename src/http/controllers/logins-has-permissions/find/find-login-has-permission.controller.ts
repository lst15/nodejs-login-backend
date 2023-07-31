import { Request, Response } from "express";
import { findLoginHasPermissionFactory } from "src/factory/logins-has-permissions/find/find-login-has-permission.factory";

const FindLoginHasPermissionController = async (req:Request,res:Response) => {
  const {email, permission} = req.body

  const factory = findLoginHasPermissionFactory()

  try {
    await factory.execute({email,permission});
    return res.status(200).json({message: "Login has permission"})
  } catch (error:any) {
    return res.status(400).json({message: error.message})
  }
}

export {FindLoginHasPermissionController};