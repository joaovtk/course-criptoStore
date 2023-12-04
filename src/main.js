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

app.listen(Number(process.env.PORT), process.env.HOST, () => {
    console.log(`Listerner in http://${process.env.HOST}:${process.env.PORT}`)
});

module.exports = app;