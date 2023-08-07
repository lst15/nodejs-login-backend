import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Response,Request } from "express";
import {z} from "zod";

function MiddlewareRoleHasPermissionsDeleteDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      permission_name:z.string().nonempty().max(15),
      role_name: z.string().nonempty().max(15)
    })

    try {
      body_schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(HttpStatusCode.CONFLICT).json(error);
    }

  }
}

export {MiddlewareRoleHasPermissionsDeleteDto};