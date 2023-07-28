import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction,Request,Response } from "express";
import {z} from "zod";

function MiddlewareLoginsCreateDto(){
  return (req:Request, res:Response, next:NextFunction) => {

    const body_schema = z.object({
      email: z.string().email(),
      password: z.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)
    })

    try { 
      body_schema.parse(req.body)
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({error: error.format()})
    }
    
    return next();
  }

}

export {MiddlewareLoginsCreateDto}