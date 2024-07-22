import { Request } from "express";

export interface BoardgameRequestDto extends Request {
  params: {
    id: string;
  };
  body: {
    name?: string;
    type?: string[];
    pic?: {
      cover?: string;
      banner?: string;
      item1?: string;
      item2?: string;
    };
  };
}
