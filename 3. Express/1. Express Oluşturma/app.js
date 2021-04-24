const express = require("express")

const app = express()

app.listen(3000)
/* 
app.get("/",(req,res) => {
    res.send("Merhaba yürü git")
}) */

app.get('/index',(req,res) => {
    res.sendFile("./html/index.html",{root:__dirname})
})

app.get('/',(req,res) => {
    res.redirect("/index");
})

app.use((req,res) => {
    res.status(404).sendFile('./html/404.html',{root:__dirname})
})