import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RoleHasPermissionsDeleteRolePermissionFactory } from "src/factory/role-has-permissions/delete/role-has-permissions-delete-role-permission.factory";

const RoleHasPermissionsDeleteRolePermissionController = async(req:Request,res:Response) => {
  const {role_name,permission_name} = req.body;

  const factory = RoleHasPermissionsDeleteRolePermissionFactory();

  try {
    const deleted = await factory.execute({role_name:role_name,permission_name:permission_name});
    res.status(HttpStatusCode.OK).json(deleted);
  } catch (error) {
    res.status(HttpStatusCode.CONFLICT).json({error: error});
  }

}

export {RoleHasPermissionsDeleteRolePermissionController};