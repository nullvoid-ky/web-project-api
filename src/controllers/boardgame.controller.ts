import { Response } from "express";
import { BoardgameRequestDto } from "src/dto/boardgame.dto";
import { boardgameService } from "src/services/boardgame.service";

const boardgameController = {

    async createGame(req: BoardgameRequestDto, res: Response) {
        try {
            console.log("0")
            const duplicateGame = await boardgameService.getGame(req.body.name)
            console.log("1")
            if (duplicateGame){
                console.log("2")
                return res.status(400).send("Duplicate Game");
            }
            console.log("3")
            const game = await boardgameService.createGame(req)
            return res.status(201).json({ game });
        } catch (error) {
            console.error(error);
            return res.status(500).send(error);
        }
    },

    async showAllGame(req: BoardgameRequestDto, res: Response) {
        try {
            const game = await boardgameService.showAllGame()
            if (!game)
                return res.status(400).send("None User");
            return res.status(201).json({ game });
        } catch (error) {
            console.error(error);
            return res.status(500).send(error);
        }
    },

    // async searchGame(req: BoardgameRequestDto, res: Response) {
    //     try {
    //         const game = await boardgameService.getGame(req.body.name)
    //         if (!game)
    //             return res.status(400).send("None User");
    //         return res.status(201).json({ game });
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).send(error);
    //     }
    // },

};

export default boardgameController;