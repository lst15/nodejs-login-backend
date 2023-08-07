import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewareRoleHasPermissionsFindPermissionsByRoleDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      role_name: z.string().nonempty().max(15)
    })

    try {
      body_schema.parse(req.params)
      next();
    } catch (error) {
      return res.status(HttpStatusCode.CONFLICT).json(error)
    }

  }
}