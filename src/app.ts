import express from "express";
import cors from "cors";
import { LoginsFindRoutes } from "./http/routes/logins/logins.find.routes";
import { LoginsCreateRoutes } from "./http/routes/logins/logins.create.routes";
import { PermissionsCreateRoutes } from "./http/routes/permissions/permissions.create.routes";
import { PermissionsFindRoutes } from "./http/routes/permissions/permissions.find.routes";
import { PermissionsDeleteRoutes } from "./http/routes/permissions/permissions.delete.routes";
import { PermissionsUpdateRoutes } from "./http/routes/permissions/permissions.update.routes";

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
LoginsFindRoutes(app)

PermissionsCreateRoutes(app)
PermissionsFindRoutes(app)
PermissionsDeleteRoutes(app)
PermissionsUpdateRoutes(app)