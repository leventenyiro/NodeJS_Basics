var express = require("express")
var path = require("path")
var app = express()

app.use("/public", express.static(path.join(__dirname, "static")))
app.set("view engine", "ejs")

var people = require("./routes/people")

app.use("/people", people)

app.listen(8080)