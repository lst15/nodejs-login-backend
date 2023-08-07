import { Express } from "express";
import { RolesCreateController } from "src/http/controllers/roles/create/roles-create.controller";
import { MiddlewareRolesCreateDto } from "src/http/middleware/dto/roles/create/middleware-roles-create.dto";

function RolesCreateRoutes(app:Express){
  app.post("/roles",MiddlewareRolesCreateDto(),RolesCreateController);
}

export {RolesCreateRoutes};