import { User } from "../models/user.js"
import bcrypt from "bcrypt";
import AppError from "../utils/AppError.js";
import emailValidate from "../utils/emailValidate.js";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenGenerator.js";

export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new AppError("All input field required")
        }

        if (!emailValidate(email)) {
            throw new AppError("Please provide a valid email", 400);
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new AppError("Email Already registered", 409);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name, email, password: hashedPassword
        });

        const user = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        };

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 1000
        })

        return res
            .status(201)
            .json({ success: true, accessToken });

    } catch (err) {
        if (err.code === 11000) {
            return new AppError("Email Already exits", 409);
        }
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new AppError("Email and Password is Empty", 400);
        }

        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            throw new AppError("Invalid Email or Password", 401);
        }

        const match = await bcrypt.compare(password, foundUser.password);

        if (!match) {
            throw new AppError("Invalid Email or Password   ", 400);
        }

        const user = {
            id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email
        };

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 1000
        });

        return res
            .status(200)
            .json({ success: true, accessToken });

    } catch (err) {
        next(err);
    }
};