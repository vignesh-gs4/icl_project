import { adminLogin } from "../controllers/adminController.js";
import express from "express";

const route = express.Router();

route.post("/", adminLogin);

export default route;