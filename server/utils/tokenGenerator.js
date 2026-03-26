import jwt from "jsonwebtoken";
import redisClient from "../config/redisConfig.js";

export function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '50s'
    });
}

export function generateRefreshToken(user) {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d'
    });

    redisClient.set(`refresh${refreshToken}`, JSON.stringify(user), {
        EX: 7 * 24 * 60 * 60
    });

    return refreshToken;
};