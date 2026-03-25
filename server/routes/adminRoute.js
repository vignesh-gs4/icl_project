import { adminLogin } from "../controllers/adminController/adminController.js";
import express from "express";
import addCourse from "../controllers/adminController/addCourse.js";
import verifyJWT from "../middlewares/verifyJWT.js"
import verifyRole from "../middlewares/verifyRole.js";
import ROLE_LIST from "../config/roleConfig.js";

const route = express.Router();

route.post("/", adminLogin);
route.post(
    "/add-course",
    verifyJWT,
    verifyRole(ROLE_LIST.Admin),
    addCourse
);

export default route;