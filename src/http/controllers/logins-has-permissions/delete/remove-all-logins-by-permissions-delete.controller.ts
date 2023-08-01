import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RemoveAllLoginsByPermissionDeleteFactory } from "src/factory/logins-has-permissions/delete/remove-all-logins-by-permission-delete.factory";

const RemoveAllLoginsByPermissionsDeleteController = async (req:Request,res:Response) => {
  const {permission} = req.body;

  const factory = RemoveAllLoginsByPermissionDeleteFactory()

  try {
    const result = await factory.execute({permission});
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message});
  }

}

export { RemoveAllLoginsByPermissionsDeleteController };