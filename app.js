var fs = require("fs")

fs.writeFile("valami.txt", "ez egy valami", err => {
    if (err) throw err;
    else {
        console.log("File successfully created")
        fs.readFile("valami.txt", "utf8", (err, file) => {
            if (err) throw err
            else
                console.log(file)
        })
    }
})

fs.rename("valami.txt", "valami2.txt", (err) => {
    if (err) throw err
    else console.log("Successful rename")
})

fs.appendFile("valami.txt", ". Some data being appended.", (err) => {
    if (err) throw err
    console.log("Successful append")
})

fs.unlink("valami.txt", (err) => {
    if (err) throw err
    else console.log("Successfully deleted")
})