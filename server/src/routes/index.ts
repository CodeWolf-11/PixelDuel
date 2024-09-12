import { Router } from "express";

import AuthRouter from "./auth.routes.js"
import VerifyRouter from "./verify.routes.js"
import UserRouter from "./user.routes.js"
import DuelRouter from "./duel.routes.js"
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.use('/auth', AuthRouter);
router.use('/', VerifyRouter);
router.use('/user', UserRouter);
router.use("/duel", authMiddleware, DuelRouter);

export default router;