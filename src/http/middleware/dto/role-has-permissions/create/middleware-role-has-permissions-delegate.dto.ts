import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewareRoleHasPermissionsDelegate(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      uuid_permission: z.string().nonempty().uuid(),
      uuid_role: z.string().nonempty().uuid()
    })

    try {
      body_schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(HttpStatusCode.CONFLICT).json(error);
    }

  }
}

export {MiddlewareRoleHasPermissionsDelegate};