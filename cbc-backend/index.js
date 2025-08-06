import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const monogourl =
  "mongodb+srv://admin:123@cluster0.tkjey8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(monogourl, {});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connected");
});

app.use(bodyParser.json());
app.use("/api/students", studentRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Server is rinning on port 3000");
});
 