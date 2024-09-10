import { registerSchema } from "../validation/auth.validations.js";
import { ZodError } from "zod";
import { formatError, renderEmailEjs } from "../helper.js";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid4 } from "uuid";
import { emailQueue, emailQueueName } from "../jobs/EmailJob.js";
export const registerController = async (req, res) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        let user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            }
        });
        if (user) {
            return res.status(422).json({
                errors: {
                    email: "Email already taken,  please use another one"
                }
            });
        }
        // hash the password
        payload.password = await bcrypt.hash(payload.password, 10);
        //send a verfication email
        const token = await bcrypt.hash(uuid4(), 10);
        const url = `${process.env.APP_URL}/api/verify-email?email=${payload.email}&token=${token}`;
        const emailHtml = await renderEmailEjs("email-verify", {
            name: payload.name,
            url: url
        });
        //add email to the queue
        await emailQueue.add(emailQueueName, {
            to: payload.email,
            subject: "Email Verification",
            body: emailHtml
        });
        //create an entry in db
        await prisma.user.create({
            data: {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                email_verify_token: token
            }
        });
        return res
            .json({
            "message": "Please check your email. we have sent you a verification email"
        });
    }
    catch (error) {
        if (error instanceof ZodError) {
            const errors = formatError(error);
            return res.status(422).json({
                message: "Invalid Data",
                errors: errors
            });
        }
        return res.status(500).json({
            "message": "Something went wrong, please try again !"
        });
    }
};
