const http = require("http");
const fs = require("fs")


/* const _ = require("lodash") */
/* 
const rastgele = _.random(0,50)

console.log(rastgele) */

console.log("Denemeler")

const server = http.createServer((req, res) => {


    let path = './html/';


    switch (req.url) {
        case "/":
              res.statusCode = 200;
            break;
        case "/iletisim":
            path += "iletisim.html";
            res.statusCode = 200;
            break;
        case "/hakkimizda":
            path += "hakkimizda.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html"
            res.statusCode = 404
    }

    res.setHeader("Content-Type", "text/html")
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })

})

server.listen(3000, 'localhost', () => {
    console.log("3000. port dinleniysor.")
})