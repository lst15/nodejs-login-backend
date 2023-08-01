import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewarePermissionsDeleteByNameDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      permission_name: z.string().nonempty().min(4).max(30)
    })

    try {
      body_schema.parse(req.body);
      return next();
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({error: error.format()});
    }

  }
}

export {MiddlewarePermissionsDeleteByNameDto};