import { Express } from "express";
import { MiddlewareLoginsCreateDto } from "../../middleware/dto/logins/create/middleware-logins-create.dto";
import { LoginsCreateController } from "../../controllers/logins/create/logins-create.controller";

function LoginsCreateRoutes(app:Express){
  app.post("/login/register",MiddlewareLoginsCreateDto(),LoginsCreateController);
}

export {LoginsCreateRoutes};