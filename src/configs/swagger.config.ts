// src/configs/swaggerConfig.ts

export const swaggerConfig = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD and Auth API application made with Mongodb, Express, and Bun.js.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: `${process.env.BASE_URL}`,
            },
        ],
    },
    apis: ["./src/routes/swagger/*.ts"],
};
