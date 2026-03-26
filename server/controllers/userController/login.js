import { User } from "../../models/User.js";
import bcrypt from "bcrypt";
import AppError from "../../utils/AppError.js";
import emailValidate from "../../utils/emailValidate.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/tokenGenerator.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new AppError("Email and Password is Empty", 400);
        }

        if(!emailValidate) {
            throw new AppError("Please give a valid Email", 400);
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
            email: foundUser.email,
            roles: foundUser.roles
        };

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "Production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "Production" ? true : false
        });

        return res
            .status(200)
            .json({
                success: true,
                accessToken,
                message: "Your are Logged In",
                roles: foundUser.roles
            });

    } catch (err) {
        next(err);
    }
};

export default login;