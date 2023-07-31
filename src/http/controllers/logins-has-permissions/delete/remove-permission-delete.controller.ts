import { Request, Response } from "express";
import { RemovePermissionDeleteFactory } from "src/factory/logins-has-permissions/delete/remove-permission-delete.factory";

const RemovePermissionDeleteController = async (req:Request, res:Response) => {
  const {email,permission} = req.body;

  const factory = RemovePermissionDeleteFactory();

  try {
    await factory.execute({email:email,permission:permission})
    return res.status(200).json({message: "Remove Permission Success"})
  } catch (error) {
    return res.status(400).json();
  }
}

export { RemovePermissionDeleteController };