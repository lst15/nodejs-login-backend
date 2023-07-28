import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissionsFindAllFactory } from "src/factory/permissions/find/permissions-find-all.factory";

const PermissionsFindAllController = async (req:Request,res:Response) => {
  const factory = PermissionsFindAllFactory()
  const permissions = await factory.execute()

  return res.status(HttpStatusCode.FOUND).json(permissions);
}

export { PermissionsFindAllController }