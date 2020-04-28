var express = require("express")
var path = require("path")
var Joi = require("joi")
var bodyParser = require("body-parser")
var app = express()

app.use("/public", express.static(path.join(__dirname, "static")))
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})

app.post("/", (req, res) => {
    console.log(req.body)
    var schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    })
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err)
            res.send("An error has occured")
        } else {
            console.log(result)
            res.send("Successfully posted data")
        }
    })
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