import { Router } from "express";
import refreshController from "../controllers/refreshController.js";
import logout from "../controllers/logoutController.js"

const commonRoute = Router();

commonRoute.get("/refresh", refreshController);
commonRoute.get("/logout", logout);

export default commonRoute;