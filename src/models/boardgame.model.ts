import mongoose, { Model } from 'mongoose';

import { boardgameSchema } from 'src/schemas/boardgame.schema';
import { BoardgameInterface } from 'src/interfaces/boardgame.interface';

const Boardgame: Model<BoardgameInterface> = mongoose.model<BoardgameInterface>(
    'Boardgame',
    boardgameSchema,
    'boardgames'
);

export { Boardgame };