import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewareRoleHasPermissionsDelegateDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      permission_name: z.string().nonempty(),
      role_name: z.string().nonempty()
    })

    try {
      body_schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(HttpStatusCode.CONFLICT).json(error);
    }

  }
}

export {MiddlewareRoleHasPermissionsDelegateDto};