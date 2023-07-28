import { NextFunction,Request,Response } from "express";
import {z} from "zod";

function MiddlewareLoginsFindByUuidDto(){
  return (req:Request, res:Response, next:NextFunction) => {

    const body_schema = z.object({
      uuid: z.string().uuid(),      
    })

    try { 
      body_schema.parse(req.query)
    } catch (error:any) {
      return res.status(400).json({error: error.format()})
    }
    
    return next();

  }

}

export {MiddlewareLoginsFindByUuidDto}