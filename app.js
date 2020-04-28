var fs = require("fs")
fs.mkdir("tutorial", (err) => {
    if (err) throw err
    else {
        fs.writeFile("./tutorial/valami.txt", "123", (err) => {
            if (err) throw err
            else console.log("Successful file create")
        })
    }
})

fs.unlink("./tutorial/valami.txt", (err) => {
    if (err) throw err
    else {
        fs.rmdir("tutorial", (err) => {
            if (err) throw err
            else console.log("Successful folder delete")
        })
    }
})

fs.readdir("tutorial", (err, files) => {
    if (err) throw err
    else {
        for (var file of files) {
            fs.unlink("./tutorial/" + file, (err) => {
                if (err) throw err
                else console.log("Successful delete files")
            })
        }
    }
})