import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { FindAllLoginsByPermissionFactory } from "src/factory/logins-has-permissions/find/find-all-logins-by-permission.factory";

const FindAllLoginsByPermissionsController = async (req:Request,res:Response) => {
  const { name } = req.params;

  const factory = FindAllLoginsByPermissionFactory();

  try {
    const result = await factory.execute({permission:name});
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({ message:  error.message });
  }

}

export { FindAllLoginsByPermissionsController };