import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction,Request,Response } from "express";
import {z} from "zod";

function MiddlewareLoginsFindByEmailDto(){
  return (req:Request, res:Response, next:NextFunction) => {

    const body_schema = z.object({
      email: z.string().email(),      
    })

    try { 
      body_schema.parse(req.query)
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({error: error.format()})
    }
    
    return next();

  }

}

export {MiddlewareLoginsFindByEmailDto}