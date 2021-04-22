const http = require("http");
const fs = require("fs")




const server = http.createServer((req, res) => {


    let path = './html/';


    switch (req.url) {
        case "/":
            path += "/index.html";
            break;
        case "/iletisim":
            path += "iletisim.html";
            break;
        case "/hakkimizda":
            path += "hakkimizda.html";
            break;
        default:
            path += "404.html"
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
    console.log("3000. port dinleniyor.")
})