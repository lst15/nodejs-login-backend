import { Request, Response } from "express";
import { RemoveAllLoginsByPermissionDeleteFactory } from "src/factory/logins-has-permissions/delete/remove-all-logins-by-permission-delete.factory";

const RemoveAllLoginsByPermissionsDeleteController = async (req:Request,res:Response) => {
  const {permission} = req.body;

  const factory = RemoveAllLoginsByPermissionDeleteFactory()

  try {
    await factory.execute(permission);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).send(error);
  }

}

export { RemoveAllLoginsByPermissionsDeleteController };