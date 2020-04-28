var http = require("http")
var server = http.createServer((req, res) => {
    /*res.write("Hello world from nodejs")
    res.end()*/
    if (req.url === "/")
        res.end("Hello world from nodejs")
    else
        res.end("Using some other domain")
})

server.listen(8080)