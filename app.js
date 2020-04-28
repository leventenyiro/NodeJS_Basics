var express = require("express")
var path = require("path")
var app = express()

app.use("/public", express.static(path.join(__dirname, "static")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})

app.get("/example", (req, res) => {
    res.send("Hitting example route")
})

app.get("/example/:name/:age", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.name + " : " + req.params.age)
})

app.listen(8080)