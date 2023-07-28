import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissionsFindByUuidFactory } from "src/factory/permissions/find/permissions-find-by-uuid.factory";

const PermisionsFindByUuidController = async (req:Request,res:Response) => {
  const { uuid } = req.params;

  const factory = PermissionsFindByUuidFactory()
  const permissions = await factory.execute({uuid});

  if(permissions){
    return res.status(HttpStatusCode.FOUND).json(permissions);
  } else {
    return res.status(HttpStatusCode.NOT_FOUND).json();
  }

}

export { PermisionsFindByUuidController }