const express = require("express");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");

// set config
let app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");
dotenv.config();
app.use(express.static(__dirname+"/static"));

app.get("/", (req, res) => {
    res.render("index", {layout: false});
});
app.get("/about", (req, res) => {
    res.render("about", {layout: false});
});
/*
app.get("/account", (req, res) => {
    res.render("account", {layout: false});
});

app.get("/account/register", (req, res) => {
    
});
app.get("/account/login", (req, res) => {
    
});*/

app.get("/login", (req, res) => {
    res.render("login", {layout: false});
});

app.get("/test", (req, res) => {
    res.render("login", {layout: false});
});

app.get("/buy", (req, res) => {
    res.render("temp", {layout: false});
});

app.listen(Number(process.env.PORT), process.env.HOST, () => {
    console.log(`Listerner in http://${process.env.HOST}:${process.env.PORT}`)
});

module.exports = app;