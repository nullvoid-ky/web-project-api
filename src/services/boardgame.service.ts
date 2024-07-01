import mongoose from "mongoose";
import { Boardgame } from "src/models/boardgame.model";
import { BoardgameType } from "src/types/boardgame.type";
import { BoardgameRequestDto } from "src/dto/boardgame.dto";

export const boardgameService = {


    // name: string;
    // type: Array<topic>;
    // short: string
    // description: string;
    // imgUrl: string;


    async createGame(boardgame: BoardgameRequestDto) {
        try {
            const game = new Boardgame(boardgame.body);
            await game.save();
            return game;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    async showAllGame() {
        try {
            const game = await Boardgame.find()
            return game

        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    async getGame(name: string) {
        try {
            const game = await Boardgame.findOne({ name });
            return game;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },



    // async updateGame(name: string) {
    //     try {
    //         const game = await Boardgame.findOne({ name });
    //         await game.save();
    //         return game;
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error(error);
    //     }
    // },

    // // async deleteGame(name: string) {
    // // }
    // async showAllGame() {
    //     try {
    //         const game = await Boardgame.find()
    //         return game
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error(error);
    //     }
    // }
};