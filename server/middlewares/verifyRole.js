import AppError from "../utils/AppError.js";

const verifyRole = (...allowedRoles) => {
    return (req, res, next) => {
        console.log("req.roles : ", req.roles);
        if (!req?.roles) {
            return next(new AppError("Access denied. No roles found", 403));
        }
        const rolesArray = [...allowedRoles];
        const hasPermission = req.roles.some(
            role => rolesArray.includes(role)
        );

        if(!hasPermission) {
            return next(new AppError("You do not allowed for this resource", 403))
        }

        next();
    }
}

export default verifyRole;