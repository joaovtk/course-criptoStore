import express, { Request, Response,  } from "express";
import { engine } from "express-handlebars";
import dotenv from "dotenv";

// set config
let app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");
dotenv.config();
app.use(express.static(__dirname+"/static"))

app.get("/", (req: Request, res: Response): void => {
    res.render("index", {layout: false})
});
app.get("/about", (req: Request, res: Response): void => {
    res.render("about", {layout: false})
});

app.get("/account", (req: Request, res: Response): void => {
    res.render("account", {layout: false})
});

app.get("/buy", (req: Request, res: Response): void => {
    res.render("temp", {layout: false});
});

app.listen(Number(process.env.PORT!), process.env.HOST!, (): void => {
    console.log(`Listerner in http://${process.env.HOST}:${process.env.PORT}`)
});