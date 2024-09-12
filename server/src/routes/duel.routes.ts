import Router from "express";
import { createDuelController, deleteDuelController, getAllDuelController, getUniqueController, updateDuelController } from "../controllers/duel.controllers.js";
import { upload } from "../config/multerConfig.js";


const router = Router();

router.post("/", upload.single('image'), createDuelController);
router.get("/", upload.none(), getAllDuelController);
router.get("/:id", upload.none(), getUniqueController);
router.put("/:id", upload.single("image"), updateDuelController);
router.delete("/:id", upload.none(), deleteDuelController);

export default router;