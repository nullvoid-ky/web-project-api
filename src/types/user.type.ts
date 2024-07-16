import { Role } from "../enums/role.enum";

export type CommonUser = {
    _id: string;
    role: Role;
};