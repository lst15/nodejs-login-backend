import { Express } from "express";
import { MiddlewareLoginsCreateDto } from "../../middleware/dto/logins/create/middleware-logins-create.dto";
import { LoginsCreateController } from "../../controllers/logins/create/logins-create.controller";
import { LoginsAuthController } from "src/http/controllers/logins/create/logins-auth.controller";
import { MiddlewareLoginsAuthDto } from "src/http/middleware/dto/logins/create/middleware-logins-auth.dto";

function LoginsCreateRoutes(app:Express){
  app.post("/login",MiddlewareLoginsCreateDto(),LoginsCreateController);
  app.post('/login/auth',MiddlewareLoginsAuthDto(),LoginsAuthController);
}

export {LoginsCreateRoutes};