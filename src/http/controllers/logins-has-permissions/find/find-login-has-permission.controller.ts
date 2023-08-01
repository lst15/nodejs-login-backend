import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { findLoginHasPermissionFactory } from "src/factory/logins-has-permissions/find/find-login-has-permission.factory";

const FindLoginHasPermissionController = async (req:Request,res:Response) => {
  const {email, permission} = req.body

  const factory = findLoginHasPermissionFactory()

  try {
    const result = await factory.execute({email,permission});
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message})
  }
}

export {FindLoginHasPermissionController};