const authRouter = require('express').Router();

import { authController } from '../controllers/auth.controller';

/**
 * @swagger
 * /auth/login:
 *  get:
 *      description: Login
 *      responses:
 *          200:
 *              description: Login successful!
 *          404:
 *              description: Not found
 *          500:
 *              description: Internal server error
 */
authRouter.get('/login', authController.login);

export default authRouter;