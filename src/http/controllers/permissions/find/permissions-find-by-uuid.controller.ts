import { Request, Response } from "express";
import { PermissionsFindByUuidFactory } from "src/factory/permissions/find/permissions-find-by-uuid.factory";

const PermisionsFindByUuidController = async (req:Request,res:Response) => {
  const { uuid } = req.params;

  const factory = PermissionsFindByUuidFactory()
  const permissions = await factory.execute({uuid});

  if(permissions){
    return res.status(302).json(permissions);
  } else {
    return res.status(404).json();
  }

}

export { PermisionsFindByUuidController }