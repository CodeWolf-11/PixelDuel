import { Router } from "express";
import AuthRouter from "./auth.routes.js";
import VerifyRouter from "./verify.routes.js";
const router = Router();
router.use('/auth', AuthRouter);
router.use('/', VerifyRouter);
export default router;
