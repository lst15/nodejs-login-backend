import { Request, Response } from "express";
import { LoginsCreateFactory } from "../../../factory/logins/logins-create.factory";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryError } from "../../../enums/enums-prisma-errors";
import { UniqueLoginsCreateError } from "../../../errors/prisma/unique-logins-create.error";

export const LoginsCreateController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const factory = LoginsCreateFactory();

  try {
    await factory.execute({ email, password });
    return res.status(201).json();
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === QueryError.UniqueConstraintViolation
    ) {
      return res.status(409).json({ error: error.message });
    }
  }
};
