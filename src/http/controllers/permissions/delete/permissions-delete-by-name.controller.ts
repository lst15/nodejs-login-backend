import { QueryError } from "@enums/enums-prisma-errors";
import HttpStatusCode from "@enums/enums-status-http-code";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { PermissionsDeleteByNameFactory } from "src/factory/permissions/delete/permissions-delete-by-name.factory";

const PermissionsDeleteByNameController = async (req:Request, res:Response) => {
  const { name } = req.body;

  const factory = PermissionsDeleteByNameFactory();

  try {
    await factory.execute({ name });
    return res.status(HttpStatusCode.NO_CONTENT).json();
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError && error.code == QueryError.RecordsNotFound) {
      return res.status(HttpStatusCode.CONFLICT).json({ error: error.message });
    } 
    
  }
  
}

export { PermissionsDeleteByNameController };