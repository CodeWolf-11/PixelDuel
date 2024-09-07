import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { send } from "./config/mail.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url)); //this will give the path of the current directory


const app: Application = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up view engine

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", async (req: Request, res: Response) => {

    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, { name: "Testing" });
    await send("yohalej367@obisims.com", "Welcome to PixelDuel", html);
    return res.json({
        "message": "email successfull"
    });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

