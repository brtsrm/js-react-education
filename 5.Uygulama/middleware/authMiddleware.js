const jwtoken = require("jsonwebtoken")
const User = require("../models/user")
const authKontrol = (req,res,next) => {
    const token = req.cookies.jwt;
    if(token){
        jwtoken.verify(token,"deneme",(err,result) => {
            if(err){
                res.redirect("/login")
            }else{
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
}


const kullaniciKontrol = (req,res,next)  => {
    const token =req.cookies.jwt;
    if(token){
        jwtoken.verify(token,'deneme',async(err,result) => {
            if(err){
                res.locals.user = null;
                next()
            }else{
                let user = await User.findById(result.id);
                res.locals.user = user;
                next()
            }
        })
    }else{
        res.locals.user = null;
        next()
    }
}

module.exports = {authKontrol,kullaniciKontrol}