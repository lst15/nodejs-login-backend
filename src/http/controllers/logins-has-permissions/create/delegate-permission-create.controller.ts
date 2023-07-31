import { Request, Response } from "express";
import { DelegatePermissionCreateFactory } from "src/factory/logins-has-permissions/create/delegate-permission-create.factory";

const DelegatePermissionCreateController = async (req:Request,res:Response) => {
  const {email,permission} = req.body

  const factory = DelegatePermissionCreateFactory();

  try {
    await factory.execute({email:email,permission:permission})
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json();
  }

}