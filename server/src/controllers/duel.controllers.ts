import { Request, Response } from "express";
import { ZodError } from "zod";
import { formatError, imageValidator } from "../helper.js";
import { duelSchema } from "../validation/duel.validation.js";
import { uploadQueue, uploadQueueName } from "../jobs/UploadJob.js";
import prisma from "../config/db.js";

export const createDuelController = async (req: Request, res: Response) => {
    try {

        const body = req.body;
        const payload = duelSchema.parse(body);

        // check file

        if (req.file) {
            const image = req.file
            const validationMessage = imageValidator(image.size, image.mimetype);

            if (validationMessage) {
                return res.status(422).json({
                    errors: { image: validationMessage }
                });
            }


        } else {
            return res.status(422).json({
                errors: { image: "Image required" }
            });
        }


        const duel = await prisma.duel.create({
            data: {
                userId: req.user?.id as number,
                title: payload.title,
                description: payload.description,
                image: "https://res.cloudinary.com/dmqwx60mi/image/upload/v1726128344/mxiwwkx5i8usgnliqtbi.png",
                expire_at: new Date(payload.expire_at)

            }
        });

        await uploadQueue.add(uploadQueueName, {
            duelId: duel.id,
            localFilePath: req.file.path
        });

        return res.status(200).json({
            message: "Duel Created successfully",
            erros: {}
        });


    } catch (error) {

        if (error instanceof ZodError) {

            let errors = formatError(error);

            return res.status(422).json({
                status: 422,
                message: "Inavlid Data",
                errors: errors
            });
        }

        return res.status(500).json({
            status: 500,
            message: "Something went wrong",
            errors: {}
        });
    }
}