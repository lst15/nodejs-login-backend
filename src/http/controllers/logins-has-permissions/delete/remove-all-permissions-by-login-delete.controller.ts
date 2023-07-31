import { Request, Response } from "express";
import { RemoveAllPermissionsByLoginDeleteFactory } from "src/factory/logins-has-permissions/delete/remove-all-permissions-by-login-delete.factory";

const RemoveAllPermissionsByLoginDeleteController = async (req:Request,res:Response) => {
  const {email} = req.body;

  const factory = RemoveAllPermissionsByLoginDeleteFactory()
  
  try {
    await factory.execute(email)
    return res.status(200).json({message: "Permissões removidas com sucesso"})
  } catch (error:any) {
    return res.status(400).json({message: error.message})
  }


}

export { RemoveAllPermissionsByLoginDeleteController };