import jwt from "jsonwebtoken";
import redisClient from "../config/redisConfig.js";
import AppError from "../utils/AppError.js";
import { generateAccessToken } from "../utils/tokenGenerator.js";

const refreshController = async (req, res, next) => {
    try {
        const refreshToken = req.cookies?.jwt;

        if (!refreshToken) {
            throw new AppError("refresh token missing", 401);
        }

        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const storedToken = await redisClient.get(`refresh${decode.email}`);

        if (!storedToken || refreshToken !== storedToken) {
            throw new AppError("Session expired", 403);
        }

        const user = {
            id: decode.id,
            email: decode.email,
            name: decode.name
        };

        const accessToken = generateAccessToken(user);

        return res
            .status(200)
            .json({ accessToken });

    } catch (err) {
        if (err.name === "TokenExpiredError") {
            next(new AppError("session expired please login again", 401));
        }
        next(err);
    }
}

export default refreshController;