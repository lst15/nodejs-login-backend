import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RemoveAllPermissionsByLoginDeleteFactory } from "src/factory/logins-has-permissions/delete/remove-all-permissions-by-login-delete.factory";

const RemoveAllPermissionsByLoginDeleteController = async (req:Request,res:Response) => {
  const {email} = req.body;
  
  const factory = RemoveAllPermissionsByLoginDeleteFactory()
  
  try {
    const result = await factory.execute({email})
    return res.status(HttpStatusCode.OK).json(result)
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message})
  }


}

export { RemoveAllPermissionsByLoginDeleteController };