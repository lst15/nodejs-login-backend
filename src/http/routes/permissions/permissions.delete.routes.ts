import { Express } from "express";
import { PermissionsDeleteByNameController } from "src/http/controllers/permissions/delete/permissions-delete-by-name.controller";
import { MiddlewarePermissionsDeleteByNameDto } from "src/http/middleware/dto/permissions/delete/middleware-permissions-delete-by-name.dto";

function PermissionsDeleteRoutes(app:Express){
  app.delete('/permissions',MiddlewarePermissionsDeleteByNameDto(),PermissionsDeleteByNameController)
}

export { PermissionsDeleteRoutes };