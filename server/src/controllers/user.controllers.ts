import { Request, Response } from "express";


export const getUserController = async (req: Request, res: Response) => {

    const user = req.user;

    return res.json({
        data: user
    });
}