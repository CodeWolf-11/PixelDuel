import Router from "express";
import { forgetPasswordController } from "../controllers/password.controllers.js";

const router = Router();

router.post('/forget-password', forgetPasswordController);

router.post('/reset-password')
export default router;