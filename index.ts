import express from "express";
import { Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotevn from "dotenv";
import { swaggerConfig } from "src/configs/swagger.config";

import authRouter from "src/routes/auth.route";

dotevn.config();

const app = express();
const port = process.env.PORT;

const specs = swaggerJsdoc(swaggerConfig);
console.log(specs);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/auth", authRouter);

app.get("/api", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});