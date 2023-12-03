from flask import Flask, url_for, render_template

app = Flask(__name__)
url_for("static", filename="css/index.css")
url_for("static", filename="css/global.css")

@app.route("/", methods=["GET"])
async def home():
    render_template("index.html")

app.run(debug=True)