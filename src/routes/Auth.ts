import { Router } from "express";
import * as AuthController from "$controllers/rest/AuthController"
import { authMiddleware } from "$middlewares/authMiddleware";

const AuthRoutes = Router({mergeParams:true}) // mergeParams = true -> to enable parsing query params

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register to the application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: User's full name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     fullName:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         description: Bad request - validation errors
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
AuthRoutes.post("/register",
    AuthController.register
)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login to the application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
AuthRoutes.post("/login",
    AuthController.login
)

/**
 * @swagger
 * /auth/verify-token:
 *   post:
 *     tags: [Auth]
 *     summary: Verify Token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
AuthRoutes.post("/verify-token",
    AuthController.verifyToken
)

/**
 * @swagger
 * /auth/change-password:
 *   put:
 *     tags: [Auth]
 *     summary: Change Password
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       401:
 *         description: Invalid credentials
 *       400:
 *         description: Bad request - validation errors
 *       500:
 *         description: Internal server error
 * */
AuthRoutes.put("/change-password", authMiddleware,
    AuthController.changePassword
)

export default AuthRoutes