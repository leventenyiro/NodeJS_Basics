var fs = require("fs")
var readStream = fs.createReadStream("./valami.txt", "utf8")
var writeStream = fs.createWriteStream("valami2.txt")
readStream.on("data", (chunk) => {
    writeStream.write(chunk) 
})