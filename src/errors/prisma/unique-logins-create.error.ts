import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryError } from "../../enums/enums-prisma-errors";

class UniqueLoginsCreateError extends Prisma.PrismaClientKnownRequestError {
  constructor(unique_name: string) {
    const message = `${unique_name} already exists!`;

    super(message, {
      code: QueryError.UniqueConstraintViolation,
      clientVersion: "^5.0.0",
    });
  }
}

export { UniqueLoginsCreateError };
