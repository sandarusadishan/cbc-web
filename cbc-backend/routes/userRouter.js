import express from "express";
import { createUser } from "../controllers/UserController";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);

export default userRouter;
