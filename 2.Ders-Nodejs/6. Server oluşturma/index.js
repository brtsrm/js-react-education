const http = require("http")

const server = http.createServer((req, res) => {
    
    // console.log(req)

    res.setHeader("Content-type","text/html")
    res.write("merhaba berat node js'ten geliyorum")
    res.write(`
        <h1>Merhaba dost</h1>
    `)
    res.end()
    
})

server.listen(3000, 'localhost', () => {
    console.log("sunucu dinlenmeye başladı")
})