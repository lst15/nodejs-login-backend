import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RolesCreateFactory } from "src/factory/roles/create/roles-create.factory";

const RolesCreateController = async (req:Request,res:Response) => {
  const {name} = req.body;

  const factory = RolesCreateFactory();

  try {
    const created = await factory.execute({name});
    return res.status(HttpStatusCode.OK).json(created)
  } catch (error) {
    return res.status(HttpStatusCode.CONFLICT).json(error);
  }

}

export {RolesCreateController};