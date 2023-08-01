import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissionsFindByUuidFactory } from "src/factory/permissions/find/permissions-find-by-uuid.factory";

const PermisionsFindByUuidController = async (req:Request,res:Response) => {
  const { uuid } = req.params;

  const factory = PermissionsFindByUuidFactory()

  try {
    const result = await factory.execute({uuid});
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message:error.message});
  }

}

export { PermisionsFindByUuidController }