import { QueryError } from "@enums/enums-prisma-errors"
import HttpStatusCode from "@enums/enums-status-http-code"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { Request,Response } from "express"
import { PermissionsUpdateByNameFactory } from "src/factory/permissions/update/permissions-update-by-name.factory"

const PermissionsUpdateByNameController = async (req:Request,res:Response) => {
  const {oldname, newname} = req.body

  const factory = PermissionsUpdateByNameFactory()

  try {
    const result = await factory.execute({oldname, newname})
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {    
    return res.status(HttpStatusCode.NOT_FOUND).json({message: error.message})
  }  
  
}

export { PermissionsUpdateByNameController }

