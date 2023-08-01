import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { PermissionsCreateFactory } from "src/factory/permissions/create/permissions-create.factory";

const PermissionsCreateController = async (req:Request, res:Response) => {
  const { name } = req.body;

  const factory = PermissionsCreateFactory();

  try {
    const result = await factory.execute({ name });
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    return res.status(HttpStatusCode.CONFLICT).json({message:"permission already exists!"})  
  }
}

export {PermissionsCreateController};