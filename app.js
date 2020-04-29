var express = require("express")
var path = require("path")
var app = express()

app.use("/public", express.static(path.join(__dirname, "static")))
app.set("view engine", "ejs")

app.get("/:userQuery", (req, res) => {
    res.render("index",{data : {userQuery: req.params.userQuery,
                        searchResults: ["book1", "book2", "book3"], 
                        loggedIn: true, 
                        username: "leventenyiro"}})
})

app.listen(8080)