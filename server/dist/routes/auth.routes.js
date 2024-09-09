import { Router } from "express";
import { registerController } from "../controllers/auth.controllers.js";
const router = Router();
//register router
router.post("/register", registerController);
export default router;
