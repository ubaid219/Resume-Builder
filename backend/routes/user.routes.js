import { Router } from "express";
import { loginUser, registerUser, logoutUser,getUser } from "../controllers/user.controller.js";
import verifyJWT  from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").get(verifyJWT, logoutUser);
userRouter.route("/getuser").get(verifyJWT, getUser);

export default userRouter;
