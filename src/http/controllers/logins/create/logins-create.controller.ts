import { Request, Response } from "express";
import { LoginsCreateFactory } from "@logins-factory/create/logins-create.factory";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryError } from "@enums/enums-prisma-errors";
import HttpStatusCode from "@enums/enums-status-http-code";

export const LoginsCreateController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const factory = LoginsCreateFactory();

  try {
    await factory.execute({ email, password });
    return res.status(HttpStatusCode.CREATED).json();
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === QueryError.UniqueConstraintViolation
    ) {
      return res.status(HttpStatusCode.CONFLICT).json({ error: error.message });
    }
  }
};
