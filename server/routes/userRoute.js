import { Router } from "express";
import { signup, login } from "../controllers/user.js";
import refreshController from "../controllers/refreshController.js";
import logout from "../controllers/logoutController.js"

const route = Router();

route.post("/signup", signup);
route.post("/login", login);
route.get("/refresh", refreshController);
route.get("/logout", logout);

export default route;