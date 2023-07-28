import {Express} from "express";
import { LoginsFindByEmailController } from "../../controllers/logins/find/logins-find-by-email.controller";
import { MiddlewareLoginsFindByEmailDto } from "../../middleware/dto/logins/find/middleware-logins-find-by-email.dto";

async function LoginsFindRoutes(app:Express) {
  app.get("/register",MiddlewareLoginsFindByEmailDto(),LoginsFindByEmailController);
}

export {LoginsFindRoutes}