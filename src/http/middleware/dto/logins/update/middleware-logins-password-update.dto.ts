import { NextFunction, Request, Response } from "express";
import { z } from "zod";

function MiddlewareLoginsPasswordUpdateDto() {
  return (req: Request, res: Response, next: NextFunction) => {

    const body_schema = z.object({
      //oldPassword: z.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/),
      newpassword: z.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)
    });

    try {
      body_schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({message: error.format()});
    }

  }
}

export {MiddlewareLoginsPasswordUpdateDto};