import express from "express";
import { Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotevn from "dotenv";
import { swaggerConfig } from "src/configs/swagger.config";
import cors from "cors";
import mongoose from "mongoose";
import utilRouter from "src/routes/util.route";
import authRouter from "src/routes/auth.route";
import boardgameRouter from "src/routes/boardgame.route";

dotevn.config();

const app = express();
const port = process.env.PORT;

const specs = swaggerJsdoc(swaggerConfig);

console.log(process.env.DB_URL)

mongoose
    .connect(process.env.DB_URL || '')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err: Error) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/auth", authRouter);
app.use("/api/boardgame", boardgameRouter);
app.use("/api/util", utilRouter);

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});