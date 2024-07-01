/**
 * @swagger
 * components:
 *      schemas:
 *        AuthRequestDto:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  format: string
 *                  example: john_doe
 *              password:
 *                  type: string
 *                  format: password
 *                  example: P@ssw0rd!
 * 
 * /api/auth/register:
 *      description: Register a new user
 *      post:
 *          summary: Register a new user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/AuthRequestDto'
 *          responses:
 *              '201':
 *                  description: OK
 *              '422':
 *                  description: Unprocessable Entity
 *              '500':
 *                  description: Internal Server Error
 * 
 * 
 * /api/auth/login:
 *      description: Login
 *      post:
 *          summary: Login
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/AuthRequestDto'
 *          responses:
 *              '201':
 *                  description: OK
 *              '422':
 *                  description: Unprocessable Entity
 *              '500':
 *                  description: Internal Server Error
 * 
 * 
 * /api/util/users:
 *      description: show all users
 *      get:
 *          summary: show all users
 *          responses:
 *              '201':
 *                  description: OK
 *              '422':
 *                  description: Unprocessable Entity
 *              '500':
 *                  description: Internal Server Error
 */