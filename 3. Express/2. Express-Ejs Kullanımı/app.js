const express = require("express") 

const app = express();

app.listen("3000")

app.set("view engine","ejs")
app.set("views","html");



app.use((req,res,next) => {
    console.log(req.hostname,req.path,req.method);
    next()
})

app.get("/",(req,res) => {
    const dersler = [
        {
            "baslik" : "React",
            "icerik" : "React dersi öğreniyoruz"
        },
        {
            "baslik" : "React-native",
            "icerik" : "React native dersi öğreniyoruz"
        }
    ]
    res.render('index',{dersler})
})
  

app.get('/hakkimda',(req,res) => {
    res.render("hakkimda",{hakkimda : 'Ben berat'})
});

app.get('/ders/ekle',(req,res) => {
    res.render('ders_ekle')
})




app.use((req,res) => {
    res.render("404")
})