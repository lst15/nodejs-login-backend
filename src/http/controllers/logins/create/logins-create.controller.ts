import { Request, Response } from "express";
import { LoginsCreateFactory } from "@logins-factory/create/logins-create.factory";
import HttpStatusCode from "@enums/enums-status-http-code";

export const LoginsCreateController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const factory = LoginsCreateFactory();

  try {
    const result = await factory.execute({ email, password });
    return res.status(HttpStatusCode.OK).json(result);
  } catch (error:any) {
    return res.status(HttpStatusCode.CONFLICT).json({ message:  error.message });
  }
};
