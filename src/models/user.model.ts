import mongoose, { Model } from 'mongoose';

import { userSchema } from 'src/schemas/user.schema';
import { UserInterface } from 'src/interfaces/user.interface';

const User: Model<UserInterface> = mongoose.model<UserInterface>(
    'User',
    userSchema,
    'users'
);

export { User };