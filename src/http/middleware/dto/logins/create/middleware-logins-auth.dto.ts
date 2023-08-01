import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

function MiddlewareLoginsAuthDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      email: z.string().email().max(255),
      password: z.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)
    })

    try {
      body_schema.parse(req.body)
      next();
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({message:error.format()})
    }

  }
}

export {MiddlewareLoginsAuthDto};