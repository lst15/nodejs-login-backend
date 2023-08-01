import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewareLoginHasPermissionsRemoveAllPermissionsByLoginDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      email:z.string().email().max(255)
    })

    try {
      body_schema.parse(req.body);
      next();
    } catch (error:any) {
      res.status(HttpStatusCode.CONFLICT).json({message:error.format()})      
    }

  }
}

export { MiddlewareLoginHasPermissionsRemoveAllPermissionsByLoginDto};