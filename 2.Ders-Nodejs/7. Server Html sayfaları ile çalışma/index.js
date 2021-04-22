const http = require("http");
const fs = require("fs")




const server = http.createServer((req, res) => {


    let path = './html/';


    switch (req.url) {
        case "/":
            path += "/index.html";
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

server.listen(80, 'https://brtsrm-nodejs-firthtml.netlify.app', () => {
    console.log("3000. port dinleniyor.")
})