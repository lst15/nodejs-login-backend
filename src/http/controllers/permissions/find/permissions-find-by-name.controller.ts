import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissiondFindByNameFactory } from "src/factory/permissions/find/permissions-find-by-name.factory";

const PermissionsFindByNameController = async (req:Request,res:Response) => {
  const { name } = req.params;

  const factory = PermissiondFindByNameFactory();

  try {
    const result = await factory.execute({name});
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message});
  }

}

export {PermissionsFindByNameController};
