var express = require("express")
var bodyparser = require("body-parser")
var app = express()

app.use(bodyparser.json())
app.use(/* "/example", */(req, res, next) => {
    //console.log(req.url, req.method)
    req.banana = "banana"
    next()
})

app.get("/", (req, res) => {
    console.log(req.banana)
    res.send("Middleware")
}).listen(8080)