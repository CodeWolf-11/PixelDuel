import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
export const formatError = (issues) => {
    let errors = {};
    issues.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message;
    });
    return errors;
};
export const renderEmailEjs = async (filename, payload) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const html = await ejs.renderFile(__dirname + `/views/emails/${filename}.ejs`, payload);
    return html;
};
