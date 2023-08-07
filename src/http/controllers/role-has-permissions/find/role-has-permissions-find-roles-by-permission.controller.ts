import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RoleHasPermissionsFindRolesByPermissionFactory } from "src/factory/role-has-permissions/find/role-has-permissions-find-roles-by-permissions.factory";

const RoleHasPermissionsFindRolesByPermissionController = async(req:Request,res:Response) => {
  const {permission_name} = req.params

  const factory = RoleHasPermissionsFindRolesByPermissionFactory()

  try {
    const found = await factory.execute({permission_name:permission_name});
    res.status(HttpStatusCode.OK).json(found);
  } catch (error) {
    res.status(HttpStatusCode.CONFLICT).json(error);
  }


}

export {RoleHasPermissionsFindRolesByPermissionController};