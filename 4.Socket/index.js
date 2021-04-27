var express = require("express")
var socket = require("socket.io")


var app = express()

var server = app.listen(3000, () => {
    console.log("3000 port dinliyoruz");
})

var io = socket(server);

io.on('connection', (socket) => {
    console.log("socket bağlantısı oluşturuldu", socket.id)

    socket.on('chat', (data) => {
        io.sockets.emit('chat2', data)
    })
    socket.on('yaziyor',(data) => {
        socket.broadcast.emit('yaziyor',data);
    })
})

app.use(express.static("public"))