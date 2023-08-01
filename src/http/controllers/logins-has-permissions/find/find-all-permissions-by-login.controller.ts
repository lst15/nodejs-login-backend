import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { FindAllPermissionsByLoginFactory } from "src/factory/logins-has-permissions/find/find-all-permissions-by-login.factory";

const FindAllPermissionsByLogin = async (req:Request,res:Response) => {  
  const {email} = req.params

  const factory = FindAllPermissionsByLoginFactory();

  try {
    const result = await factory.execute({email});
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({error: error.message})
  }

}

export {FindAllPermissionsByLogin};