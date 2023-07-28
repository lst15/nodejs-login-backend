import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewarePermissionsCreateDto(){
  return (req:Request,res:Response,next:NextFunction) => {
    const body_schema = z.object({
      name:z.string().nonempty().min(4)
    })

    try { 
      body_schema.parse(req.body)
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({error: error.format()})
    }
    
    return next();
  }
  
}

export {MiddlewarePermissionsCreateDto};