import { Express } from "express";
import { PermissionsFindAllController } from "src/http/controllers/permissions/find/permissions-find-all.controller";
import { PermissionsFindByNameController } from "src/http/controllers/permissions/find/permissions-find-by-name.controller";
import { PermisionsFindByUuidController } from "src/http/controllers/permissions/find/permissions-find-by-uuid.controller";
import { MiddlewareLoginsFindByUuidDto } from "src/http/middleware/dto/logins/find/middleware-logins-find-by-uuid.dto";
import { MiddlewarePermissionsFindByNameDto } from "src/http/middleware/dto/permissions/find/middleware-permissions-find-by-name.dto";

function PermissionsFindRoutes(app:Express) {
  app.get('/permissions', PermissionsFindAllController)
  app.get('/permissions/name/:name',MiddlewarePermissionsFindByNameDto(), PermissionsFindByNameController)
  app.get('/permissions/uuid/:uuid',MiddlewareLoginsFindByUuidDto(),PermisionsFindByUuidController)
  
}

export { PermissionsFindRoutes };