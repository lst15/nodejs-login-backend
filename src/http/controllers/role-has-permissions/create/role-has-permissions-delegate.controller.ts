import { QueryError } from "@enums/enums-prisma-errors";
import HttpStatusCode from "@enums/enums-status-http-code";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Request, Response } from "express";
import { RoleHasPermissionsDelegateFactory } from "src/factory/role-has-permissions/create/role-has-permissions-delegate.factory";

const RoleHasPermissionsDelegateController = async(req:Request,res:Response) => {
  const {permission_name,role_name} = req.body

  const factory = RoleHasPermissionsDelegateFactory();

  try {
    const delegated = await factory.execute({
      role_name:role_name,
      permission_name:permission_name      
    })

    res.status(HttpStatusCode.OK).json({delegated});
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError){
      if (error.code == QueryError.UniqueConstraintViolation){
        return res.status(HttpStatusCode.CONFLICT).json({message:"delegate already exists!"})
      }
    }
    return res.status(HttpStatusCode.CONFLICT).json(error);
  }

}

export {RoleHasPermissionsDelegateController};