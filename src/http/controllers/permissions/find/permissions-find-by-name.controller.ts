import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissiondFindByNameFactory } from "src/factory/permissions/find/permissions-find-by-name.factory";

const PermissionsFindByNameController = async (req:Request,res:Response) => {
  const { name } = req.params;

  const factory = PermissiondFindByNameFactory();
  const result = await factory.execute({name});

  if(result){
    return res.status(HttpStatusCode.FOUND).json(result);
  } else {
    return res.status(HttpStatusCode.NOT_FOUND).json();
  }

}

export {PermissionsFindByNameController};
