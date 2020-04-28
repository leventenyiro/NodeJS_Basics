var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url === "/html") {
        var readStream = fs.createReadStream("./static/index.html")
        res.writeHead(200, {"Content-type": "text/html"})
        readStream.pipe(res)
    } else if (req.url === "/image") {
        var readStream = fs.createReadStream("./static/valami.jpg")
        res.writeHead(200, {"Content-type": "image/jpg"})
        readStream.pipe(res)
    } else if (req.url === "/json") {
        var readStream = fs.createReadStream("./static/valami.json")
        res.writeHead(200, {"Content-type": "application/json"})
        readStream.pipe(res)
    } else
        res.end("Nem ezt az oldalt keresed!")

}).listen(8080)