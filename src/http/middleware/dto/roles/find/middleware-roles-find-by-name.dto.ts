import HttpStatusCode from "@enums/enums-status-http-code";
import { NextFunction, Request, Response } from "express";
import { string, z } from "zod";

function MiddlewareRolesFindByNameDto(){
  return (req:Request,res:Response,next:NextFunction) => {

    const body_schema = z.object({
      name:z.string().nonempty().max(15)
    })

    try {
      body_schema.parse(req.params);
      next()
    } catch (error:any) {
      return res.status(HttpStatusCode.CONFLICT).json({message:error.format()})
    }

  }
}

export {MiddlewareRolesFindByNameDto};