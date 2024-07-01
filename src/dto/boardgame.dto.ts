import { Request } from "express";

export interface BoardgameRequestDto extends Request {
    body: {
        name: string;
        topic: Array<string>;
        short: string
        description: string;
        imgUrl: string;
    };

}