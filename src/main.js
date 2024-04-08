const express = require("express");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
// set config
let app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");
dotenv.config();
app.use(express.static(__dirname+"/static"));

async function getProducts(){
    let client = new MongoClient(process.env.MONGO_URL);
    let store = client.db("store");
    let all = store.collection("cripto");
    let data = await all.find({}).limit(15).toArray();
    return data;
}
let data;


getProducts().then(async (d) => {
    data = d;    
});


app.get("/", async (req, res) => {
    console.log(data);
    if(data.length == 0){
        res.render("error", {layout: false});
    }else {
        res.render("index", {layout: false, data: data});
    }
});
app.get("/about", (req, res) => {
    res.render("about", {layout: false});
});

app.get("/create", (req, res)=> {
    res.render("create", {layout: false});
});
app.get("/login", (req, res)=> {
    res.render("login", {layout: false});
});

app.get("/buy", (req, res) => {
    res.render("temp", {layout: false});
});

app.post("/create", (req, res) => {
    let user = req.query;
    console.log(user);
});
app.get("/check", (req, res) => {
    res.send("Teste").end()
})

app.listen(Number(process.env.PORT), process.env.HOST, () => {
    console.log(`Listerner in http://${process.env.HOST}:${process.env.PORT}`)
});



module.exports = app;