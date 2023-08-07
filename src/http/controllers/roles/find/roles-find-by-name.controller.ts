import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RolesFindByNameFactory } from "src/factory/roles/find/roles-find-by-name.factory";

const RolesFindByNameController = async (req:Request,res:Response) => {
  const {name} = req.params;

  const factory = RolesFindByNameFactory()

  try {
    const found = await factory.execute({name:name});
    return res.status(HttpStatusCode.OK).json(found);
  } catch (error) {
    return res.status(HttpStatusCode.CONFLICT).json(error);
  }
}

export {RolesFindByNameController};