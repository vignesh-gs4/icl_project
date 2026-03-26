import { User } from  "../../models/User.js";
import bcrypt from "bcrypt";
import AppError from "../../utils/AppError.js";
import emailValidate from "../../utils/emailValidate.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/tokenGenerator.js";

const signup = async (req, res, next) => {
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
            name, email, password: hashedPassword, roles: [process.env.User]
        });

        const user = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            roles: newUser.roles,
        };

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "Production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "Production" ? true : false
        })

        return res
            .status(201)
            .json({ success: true, accessToken, roles: newUser.roles });

    } catch (err) {
        if (err.code === 11000) {
            return new AppError("Email Already exits", 409);
        }
        next(err);
    }
}

export default signup