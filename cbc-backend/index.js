import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const monogourl = process.env.MONGO_DB_URI;

mongoose.connect(monogourl, {});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connected");
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log(token);
  if (token != null) {
    jwt.verify(token, "cbc-secret-key-7973", (error, decoded) => {
      if (!error) {
        console.log(decoded);
        req.user = decoded;
      }
    });
  }
  next();
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Server is rinning on port 3000");
});
