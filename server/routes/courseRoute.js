import { Router } from "express";
import verifyJWT from "../middlewares/verifyJWT.js";
import addCourse from "../controllers/courseController/addCourse.js"
import { getCourse, getCourseInfo } from "../controllers/courseController/getCourse.js"
import ROLE_LIST from "../config/roleConfig.js";
import verifyRole from "../middlewares/verifyRole.js"
import upload from "../config/multerConfig.js"

const route = Router();

route.get("/", getCourse);
route.get(
    "/:courseId",
    verifyJWT,
    verifyRole(ROLE_LIST.Admin, ROLE_LIST.User),
    getCourseInfo
);

route.post(
    "/add-course",
    verifyJWT,
    verifyRole(ROLE_LIST.Admin),
    upload.single("courseImage"),
    addCourse
);

export default route;