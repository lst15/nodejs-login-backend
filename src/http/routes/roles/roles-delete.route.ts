import { Express } from "express";
import { RolesDeleteByNameController } from "src/http/controllers/roles/delete/roles-delete-by-name.controller";
import { MiddlewareRolesDeleteByNameDto } from "src/http/middleware/dto/roles/delete/middleware-roles-delete-by-name.dto";

function RolesDeleteRoutes(app:Express){
  app.delete("/roles",MiddlewareRolesDeleteByNameDto(),RolesDeleteByNameController)
}

export {RolesDeleteRoutes};