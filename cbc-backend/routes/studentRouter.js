import express from "express";
import {
  getStudents,
  createStudents,
  deleteStudents,
} from "../controllers/StudentController.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents);
studentRouter.post("/", createStudents);
studentRouter.delete("/", deleteStudents);

export default studentRouter;
