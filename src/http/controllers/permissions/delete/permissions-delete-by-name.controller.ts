import { QueryError } from "@enums/enums-prisma-errors";
import HttpStatusCode from "@enums/enums-status-http-code";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { PermissionsDeleteByNameFactory } from "src/factory/permissions/delete/permissions-delete-by-name.factory";

const PermissionsDeleteByNameController = async (req:Request, res:Response) => {
  const { permission_name } = req.body;

  const factory = PermissionsDeleteByNameFactory();

  try {
    const result = await factory.execute({ name:permission_name });
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.CONFLICT).json({ message: error.message });
  }
  
}

export { PermissionsDeleteByNameController };