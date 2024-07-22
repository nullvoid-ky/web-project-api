import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./src/routes/auth.route";
import userRouter from "./src/routes/user.route";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI || "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: Error) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
