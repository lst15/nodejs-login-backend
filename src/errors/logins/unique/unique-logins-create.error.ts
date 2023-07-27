import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

class UniqueLoginsCreateError extends Prisma.PrismaClientKnownRequestError {
  readonly code_error: number;

  constructor(unique_name: string, error: PrismaClientKnownRequestError) {
		const message = `${unique_name} already exists!`;
    super(message, error);
    this.code_error = 500;
		this.message = message;		 
  }

  public get getmessage() {
    return {
      message:this.message      
    };
  }
}

export { UniqueLoginsCreateError };
