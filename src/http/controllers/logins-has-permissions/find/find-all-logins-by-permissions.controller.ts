import { Request, Response } from "express";
import { FindAllLoginsByPermissionFactory } from "src/factory/logins-has-permissions/find/find-all-logins-by-permission.factory";

const FindAllLoginsByPermissionsController = async (req:Request,res:Response) => {
  const { permission } = req.body;

  const factory = FindAllLoginsByPermissionFactory();

  try {
    await factory.execute(permission);
  } catch (error:any) {
    return res.status(400).json({ error: error.message });
  }

}

export { FindAllLoginsByPermissionsController };