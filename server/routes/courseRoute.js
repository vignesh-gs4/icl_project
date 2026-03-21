import { Router } from "express";
import verifyJWT from "../middlewares/verifyJWT.js";

const route = Router();

route.get("/", verifyJWT, (req, res) => {
    return res.json({ message: "course route accessed" });
});

export default route;