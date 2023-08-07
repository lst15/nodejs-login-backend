import { Express } from "express";
import { RolesFindByNameController } from "src/http/controllers/roles/find/roles-find-by-name.controller";
import { MiddlewareRolesFindByNameDto } from "src/http/middleware/dto/roles/find/middleware-roles-find-by-name.dto";

function RolesFindRoutes(app:Express) {
  app.get("/roles/:name",MiddlewareRolesFindByNameDto(),RolesFindByNameController)
}

export {RolesFindRoutes}