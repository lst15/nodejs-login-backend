import { Request, Response } from "express";
import { PermissiondFindByNameFactory } from "src/factory/permissions/find/permissions-find-by-name.factory";

const PermissionsFindByNameController = async (req:Request,res:Response) => {
  const { name } = req.body;

  const factory = PermissiondFindByNameFactory();
  const result = await factory.execute(name);

  if(result){
    return res.status(302).json(result);
  } else {
    return res.status(404).json();
  }
}