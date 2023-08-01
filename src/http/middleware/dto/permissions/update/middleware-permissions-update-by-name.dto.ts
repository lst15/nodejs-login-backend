import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewarePermissionsUpdateByNameDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      permission_oldname: z.string().min(3).max(30),
      permission_newname: z.string().min(3).max(30),
    })

    try {
      body_schema.safeParse(req.body);
      return next();
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({error:error.format()})
    }

  }
}

export {MiddlewarePermissionsUpdateByNameDto}