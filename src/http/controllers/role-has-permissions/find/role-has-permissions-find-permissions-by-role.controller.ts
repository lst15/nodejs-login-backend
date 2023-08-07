import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RoleHasPermissionsFindByRoleFactory } from "src/factory/role-has-permissions/find/role-has-permissions-find-permissions-by-role.factory";

const RoleHasPermissionsFindPermissionsByRoleController = async(req:Request,res:Response) => {
  const {role_name} = req.params;
  
  const factory = RoleHasPermissionsFindByRoleFactory()

  try {
    const found = await factory.execute({role_name:role_name})
    res.status(HttpStatusCode.OK).json(found);
  } catch (error) {
    res.status(HttpStatusCode.CONFLICT).json(error);
  }

}

export {RoleHasPermissionsFindPermissionsByRoleController}
