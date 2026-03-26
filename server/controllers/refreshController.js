import jwt from "jsonwebtoken";
import redisClient from "../config/redisConfig.js";
import AppError from "../utils/AppError.js";
import { generateAccessToken } from "../utils/tokenGenerator.js";

const refreshController = async (req, res, next) => {
    try {
        const refreshToken = req.cookies?.jwt;
        console.log("cookies", req.cookies.jwt);
        if (!refreshToken) {
            throw new AppError("refresh token missing", 401);
        }

        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const storedUser = await redisClient.get(`refresh${refreshToken}`);

        if (!storedUser || decode.id !== JSON.parse(storedUser).id) {
            throw new AppError("Session expired", 403);
        }

        console.log("decode : ", decode);

        const user = {
            id: decode.id,
            email: decode.email,
            name: decode?.name,
            roles: decode?.roles
        };

        const accessToken = generateAccessToken(user);

        return res
            .status(200)
            .json({ accessToken, roles: user.roles });

    } catch (err) {
        if (err.name === "TokenExpiredError") {
            next(new AppError("session expired please login again", 401));
        }
        next(err);
    }
}

export default refreshController;