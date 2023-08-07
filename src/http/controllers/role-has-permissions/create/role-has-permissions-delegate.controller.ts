import HttpStatusCode from "@enums/enums-status-http-code";
import { Request, Response } from "express";
import { RoleHasPermissionsDelegateFactory } from "src/factory/role-has-permissions/create/role-has-permissions-delegate.factory";

const RoleHasPermissionsDelegateController = async(req:Request,res:Response) => {
  const {uuid_role,uuid_permission} = req.body

  const factory = RoleHasPermissionsDelegateFactory();

  try {
    const delegated = await factory.execute({
      uuid_role:uuid_role,
      uuid_permission:uuid_permission
    })

    res.status(HttpStatusCode.OK).json({delegated});
  } catch (error) {
    res.status(HttpStatusCode.CONFLICT).json(error);
  }

}

export {RoleHasPermissionsDelegateController};