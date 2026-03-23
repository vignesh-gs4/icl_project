import AppError from "../utils/AppError.js";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenGenerator.js";
import bcrypt from "bcrypt"

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new AppError("Email and Password Required", 400);
        }

        if (email !== process.env.ADMIN_EMAIL) {
            throw new AppError("Invalid Credentials", 401);
        }

        const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

        if (!isMatch) {
            throw new AppError("Invalid Credentials", 401);
        }

        const payload = { email, admin: true };

        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV ? "none" : "strict",
            maxAge: 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "Production"
        });

        return res
            .status(200)
            .json({ success: true, message: "You are Logged In" });

    } catch (err) {
        next(err);
    }

}