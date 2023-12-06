const express = require("express");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");
const pages = require("./routes/pages");
// set config
let app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");
dotenv.config();
app.use(express.static(__dirname+"/static"));
app.use(pages);

// set up the server
app.listen(Number(process.env.PORT), process.env.HOST, () => {
    console.log(`Listerner in http://${process.env.HOST}:${process.env.PORT}`)
});