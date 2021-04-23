const http = require("http")
const kullanicilar = require('./data/kullaniciDB.json')
const server = http.createServer((req, res) => {


    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/html')
    // res.write('<h1>Merhaba Nodejssss</h1>')
    // res.end()

    if (req.url === '/api/kullanicilar' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(kullanicilar))
    } else {
        res.writeHead(404, { 'Content-type': 'application/json' })
        res.end(JSON.stringify({ 'mesaj': 'hata' }))
    }


})


const PORT = process.env.port || 5000;

server.listen(PORT, () => console.log(`Bu ${PORT} numarası ile çalışıyor`))