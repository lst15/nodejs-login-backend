import { Prisma } from "@prisma/client";
import { QueryError } from "../../enums/enums-prisma-errors";

class RecordNotFound extends Prisma.PrismaClientKnownRequestError {
  constructor(record: string) {
    const message = `${record} not found!`;

    super(message, {
      code: QueryError.RecordsNotFound,
      clientVersion: "^5.0.0",
    });
  }
}

export { RecordNotFound };
