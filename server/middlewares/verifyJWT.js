import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
    const authorization = req.headers.authorization || req.headers.Authorization;

    if(!authorization || !authorization?.startsWith("Bearer ")) {
        next(new AppError("user not authorized", 401));
    }

    const token = authorization.split(" ")[1];

    if(!token) {
        next(new AppError("user not authorized", 401));
    }
    
    try {
        const decode = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch(err) {
        if(err.name === "TokenExpiredErrro") {
            next(new AppError("access token expired", 403));
        }
        next(new AppError("invalid access token", 401));
    }
}

export default verifyJWT;