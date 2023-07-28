import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewarePermissionsFindByUuidDto(){
  return (req:Request, res:Response,next:NextFunction) => {

    const body_schema = z.object({
      uuid: z.string().uuid()
    })

    try {
      body_schema.safeParse(req.params);
      return next()
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({error:error.format()})
    }

  }
}

export {MiddlewarePermissionsFindByUuidDto};