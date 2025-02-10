import { Router } from "express";
import * as AuthController from "$controllers/rest/AuthController"
import { authMiddleware } from "$middlewares/authMiddleware";

const AuthRoutes = Router({mergeParams:true}) // mergeParams = true -> to enable parsing query params

AuthRoutes.post("/register",
    AuthController.register
)

AuthRoutes.post("/login",
    AuthController.login
)

AuthRoutes.post("/verify-token",
    AuthController.verifyToken
)

AuthRoutes.put("/change-password", authMiddleware,
    AuthController.changePassword
)

export default AuthRoutes