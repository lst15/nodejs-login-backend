import express from "express";
import cors from "cors";
import { LoginsFindRoutes } from "./http/routes/logins/logins.find.routes";
import { LoginsCreateRoutes } from "./http/routes/logins/logins.create.routes";
import { PermissionsCreateRoutes } from "./http/routes/permissions/permissions.create.routes";
import { PermissionsFindRoutes } from "./http/routes/permissions/permissions.find.routes";
import { PermissionsDeleteRoutes } from "./http/routes/permissions/permissions.delete.routes";
import { PermissionsUpdateRoutes } from "./http/routes/permissions/permissions.update.routes";
import { LoginsUpdateRoutes } from "./http/routes/logins/logins.update.routes";
import { LoginsDeleteRoutes } from "./http/routes/logins/logins.delete.routes";
import { RolesCreateRoutes } from "./http/routes/roles/roles-create.routes";
import { RolesFindRoutes } from "./http/routes/roles/roles-find.routes";
import { RolesDeleteRoutes } from "./http/routes/roles/roles-delete.route";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	})
);

LoginsCreateRoutes(app);
LoginsFindRoutes(app);
LoginsUpdateRoutes(app);
LoginsDeleteRoutes(app);

PermissionsCreateRoutes(app);
PermissionsFindRoutes(app);
PermissionsDeleteRoutes(app);
PermissionsUpdateRoutes(app);

RolesCreateRoutes(app);
RolesFindRoutes(app);
RolesDeleteRoutes(app);