import { Router } from "express";
import user from "./user.router";
import health from "./health.route";

//web api
const routes = Router();

routes.use("/user", user);
routes.use("/", health);

export default routes;
