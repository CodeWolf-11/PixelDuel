import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getUserController } from "../controllers/user.controllers.js";
const router = Router();
router.get("/", authMiddleware, getUserController);
export default router;
