import redisClient from "../config/redisConfig.js";

const logout = async (req, res, next) => {
    const refreshToken = req.cookies?.jwt;

    try {
        if (refreshToken) {
            await redisClient.del(`refresh${refreshToken}`);
        }

        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "strict"
        });
        console.log("request occurred here");

        return res
            .status(200)
            .json({ message: "Logged out successfully" });
    } catch (err) {
        next(err);
    }

}

export default logout;