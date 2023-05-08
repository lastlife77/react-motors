import Router from "express";
import { UserController } from "../controllers/index.js";
import { registerValidation, loginValidation } from "../validation/auth.js";
import checkAuth from "../utils/checkAuth.js";

const router = new Router();

router.post("/login", loginValidation, UserController.login);
router.post("/register", registerValidation, UserController.register);
router.get("/me", checkAuth, UserController.getMe);

export default router;
