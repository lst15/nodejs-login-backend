import { Express } from "express";
import { PermissionsCreateController } from "src/http/controllers/permissions/create/permissions-create.controller";
import { MiddlewarePermissionsCreateDto } from "src/http/middleware/dto/permissions/create/middleware-permissions-create.dto";

function PermissionsCreateRoutes(app:Express){
  app.post('/permissions', MiddlewarePermissionsCreateDto(),PermissionsCreateController);
}

export {PermissionsCreateRoutes};