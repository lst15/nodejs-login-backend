import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewareLoginHasPermissionsDeleteDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      email: z.string().email().max(255),
      permission_name: z.string().min(4).max(30)
    })

    try {
      body_schema.parse(req.body)
      next();
    } catch (error:any) {
      res.status(HttpStatusCode.CONFLICT).json({message:error.format()})
    }

  }
}

export {MiddlewareLoginHasPermissionsDeleteDto};