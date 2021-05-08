const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutess")
const workRoutes = require("./routes/workRoutes")
const cookieParsel = require("cookie-parser")
const {authKontrol,kullaniciKontrol} = require("./middleware/authMiddleware")
const ejs = require("ejs")  

const app = express();

app.use(express.static("public"));
app.use(express.json())
app.use(cookieParsel())


app.set("view engine","ejs");

const dbURI = "mongodb+srv://sphinx:0532berat@cluster1.i67ym.mongodb.net/isTakib?retryWrites=true&w=majority";

mongoose.connect(dbURI,{useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true})
.then((result) => {
    app.listen(3000,() => {
        console.log("başarılı şekilde")
    })
}).catch((err) => {
    console.log(err)
})
app.get('*',kullaniciKontrol);
app.get("/",authKontrol,(req,res) => {res.render("home")})
// app.get("/works",authKontrol,(req,res) => {res.render("works")})

app.use(authRoutes)
app.use(workRoutes)


app.get("/set-cookie",(req,res) => {
    res.cookie('yeni',false)
    res.cookie('parola','12345',{maxAge:1000*60*60*24,httpOnly:true})
    res.send("kuki oluşturuldu")
})

app.get('/get-cookie',(req,res) => {
    const cookie = req.cookies;
    res.json(cookie)
})