var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var app = express()

app.use("/public", express.static(path.join(__dirname, "static")))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})

app.post("/", (req, res) => {
    console.log(req.body)
    // DB here
    //res.send("Successfully posted data")
    res.json({success : true})
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