import { ZodError } from "zod";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";


export const formatError = (issues: ZodError) => {

    let errors: any = {};

    issues.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message
    })

    return errors;
}

export const renderEmailEjs = async (filename: string, payload: any): Promise<string> => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const html: string = await ejs.renderFile(__dirname + `/views/emails/${filename}.ejs`, payload);
    return html;
}