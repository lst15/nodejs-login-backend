import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissionsFindAllFactory } from "src/factory/permissions/find/permissions-find-all.factory";

const PermissionsFindAllController = async (req:Request,res:Response) => {
  const factory = PermissionsFindAllFactory()

  try {
    const result = await factory.execute();
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.CONFLICT).json(error);
  }

}

export { PermissionsFindAllController }