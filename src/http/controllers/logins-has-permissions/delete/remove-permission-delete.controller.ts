import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RemovePermissionDeleteFactory } from "src/factory/logins-has-permissions/delete/remove-permission-delete.factory";

const RemovePermissionDeleteController = async (req:Request, res:Response) => {
  const {email,permission} = req.body;

  const factory = RemovePermissionDeleteFactory();

  try {
    const result = await factory.execute({email:email,permission:permission})
    return res.status(HttpStatusCode.OK).json(result)
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message});
  }
}

export { RemovePermissionDeleteController };