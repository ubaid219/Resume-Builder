import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async (req, _, next) => {
    // Extract token from cookies or Authorization header
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
        throw new ApiError(401, "Unauthorized request: No token provided");
    }

    try {
        // Verify and decode the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if (!decodedToken || !decodedToken._id) {
            throw new ApiError(401, "Invalid token");
        }

        // Fetch the user based on the decoded token's ID
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Unauthorized request: User not found");
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new ApiError(401, "Unauthorized request: Token expired");
        } else if (error.name === "JsonWebTokenError") {
            throw new ApiError(401, "Unauthorized request: Invalid token");
        } else {
            throw new ApiError(401, error.message || "Unauthorized request");
        }
    }
});

export default verifyJWT;
