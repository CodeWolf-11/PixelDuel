import { Router } from "express";
import { CheckCredentials, loginController, registerController } from "../controllers/auth.controllers.js";
const router = Router();
//register router
router.post("/register", registerController);
//login route
router.post("/login", loginController);
router.post("/check-credentials", CheckCredentials);
export default router;
