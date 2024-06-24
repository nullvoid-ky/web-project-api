import { Request } from "express";

export interface AuthRequestDto extends Request {
    body: {
        username: string;
        password: string;
    };
}