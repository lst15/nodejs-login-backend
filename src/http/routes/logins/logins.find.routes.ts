import {Express} from "express";
import { LoginsFindByEmailController } from "../../controllers/logins/find/logins-find-by-email.controller";
import { MiddlewareLoginsFindByEmailDto } from "../../middleware/dto/logins/find/middleware-logins-find-by-email.dto";
import { LoginsFindByUuidController } from "src/http/controllers/logins/find/logins-find-by-uuid.controller";
import { MiddlewareLoginsFindByUuidDto } from "src/http/middleware/dto/logins/find/middleware-logins-find-by-uuid.dto";

async function LoginsFindRoutes(app:Express) {
  app.get("/login/email/:email",LoginsFindByEmailController);
  app.get("/login/uuid/:uuid",LoginsFindByUuidController);
}

export {LoginsFindRoutes}