import { Request, Response } from "express";

export const verifyController = async (req: Request, res: Response) => {

    const { email, token } = req.query;

    if (email && token) {

    }
    return res.redirect('verify-error');
}

export const verifyErrorController = async (req: Request, res: Response) => {
    return res.render("auth/emailVerifyErrorPage");
}