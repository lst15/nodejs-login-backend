import express from "express";
import cors from "cors";
import { LoginsFindRoutes } from "./http/routes/login/logins.find.routes";
import { LoginsCreateRoutes } from "./http/routes/login/logins.create.routes";

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