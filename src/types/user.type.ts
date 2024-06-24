import { Role } from "src/enums/role.enum";

export type CommonUser = {
    _id: string;
    role: Role;
};