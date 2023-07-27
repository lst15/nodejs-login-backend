import express from "express";
import cors from "cors";
import { LoginsRoutes } from "./http/routes/logins.routes";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	})
);

LoginsRoutes(app);