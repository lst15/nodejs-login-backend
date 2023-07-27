import { Express } from "express";
import { LoginsCreateController } from "../controllers/logins/logins-create.controller";

async function LoginsRoutes(app:Express){
  app.post("/login",LoginsCreateController);
}

export {LoginsRoutes};