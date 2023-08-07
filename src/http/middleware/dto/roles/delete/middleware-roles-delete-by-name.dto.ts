import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

function MiddlewareRolesDeleteByNameDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      name:z.string().nonempty().max(15)
    })

    try {
      body_schema.parse(req.body);
      next();
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({message:error.format()})
    }
  }
}

export {MiddlewareRolesDeleteByNameDto};