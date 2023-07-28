import HttpStatusCode from "@enums/enums-status-http-code"
import { Request,Response } from "express"
import { PermissionsUpdateByNameFactory } from "src/factory/permissions/update/permissions-update-by-name.factory"

const PermissionsUpdateByNameController = async (req:Request,res:Response) => {
  const {oldname, newname} = req.body

  const factory = PermissionsUpdateByNameFactory()

  try {
    const result = await factory.execute({oldname, newname})
    return res.status(HttpStatusCode.ACCEPTED).json(result); 
  } catch (error) {
    return res.status(HttpStatusCode.CONFLICT).json()
  }  
  
}

export { PermissionsUpdateByNameController }

