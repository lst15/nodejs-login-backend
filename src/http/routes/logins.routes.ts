import { Express } from "express";
import { LoginsCreateController } from "../controllers/logins/create/logins-create.controller";
import { MiddlewareLoginsCreateDto } from "../middleware/dto/logins/create/middleware-logins-create.dto";

async function LoginsRoutes(app:Express){
  app.post("/login",MiddlewareLoginsCreateDto(),LoginsCreateController);
}

export {LoginsRoutes};