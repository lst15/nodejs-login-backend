import { Express } from "express";
import { PermissionsUpdateByNameController } from "src/http/controllers/permissions/update/permissions-update-by-name.controller";
import { MiddlewarePermissionsUpdateByNameDto } from "src/http/middleware/dto/permissions/update/middleware-permissions-update-by-name.dto";

function PermissionsUpdateRoutes(app:Express){
  app.put("/permissions",PermissionsUpdateByNameController);
}

export {PermissionsUpdateRoutes};