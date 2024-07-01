import { Role } from "src/enums/role.enum";


export type BoardgameType = {
    _id: string;
    name: string;
    topic: Array<string>;
    short: string
    description: string;
    imgUrl: string;
    __v: number;
};