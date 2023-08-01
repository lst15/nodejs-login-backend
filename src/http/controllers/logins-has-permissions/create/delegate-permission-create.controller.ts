import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { DelegatePermissionCreateFactory } from "src/factory/logins-has-permissions/create/delegate-permission-create.factory";

const DelegatePermissionCreateController = async (req:Request,res:Response) => {
  const {email,permission} = req.body

  const factory = DelegatePermissionCreateFactory();

  try {
    const result = await factory.execute({email:email,permission:permission})
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message:error.message});
  }

}

export {DelegatePermissionCreateController};