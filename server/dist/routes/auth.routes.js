import { Router } from "express";
import { CheckCredentials, loginController, registerController } from "../controllers/auth.controllers.js";
import { authLimiter } from "../config/rateLimit.js";
const router = Router();
//register router
router.use(authLimiter);
router.post("/register", registerController);
//login route
router.post("/login", loginController);
router.post("/check-credentials", CheckCredentials);
export default router;
