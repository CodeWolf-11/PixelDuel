import Router from "express";
import { createDuelController } from "../controllers/duel.controllers.js";
import { upload } from "../config/multerConfig.js";


const router = Router();

router.post("/", upload.single('image'), createDuelController)

export default router;