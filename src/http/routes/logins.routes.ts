import { Express } from "express";
import { LoginsCreateController } from "../controllers/logins/logins-create.controller";
import { MiddlewareLoginsCreateDto } from "../middleware/dto/logins/middleware-logins-create.dto";

async function LoginsRoutes(app:Express){
  app.post("/login",MiddlewareLoginsCreateDto(),LoginsCreateController);
}

export {LoginsRoutes};