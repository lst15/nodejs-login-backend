import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RolesDeleteByNameFactory } from "src/factory/roles/delete/roles-delete-by-name.factory";

const RolesDeleteByNameController = async (req:Request,res:Response) => {
  const {name} = req.body;  
  const factory = RolesDeleteByNameFactory();

  try {
    const deleted = await factory.execute({name:name});
    return res.status(HttpStatusCode.OK).json(deleted);
  } catch (error) {
    return res.status(HttpStatusCode.CONFLICT).json(error)
  }

}

export {RolesDeleteByNameController};