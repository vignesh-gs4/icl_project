import { Router } from "express";
import signup from "../controllers/userController/signup.js"
import login from "../controllers/userController/login.js"

const route = Router();

route.post("/signup", signup);
route.post("/login", login);

export default route;