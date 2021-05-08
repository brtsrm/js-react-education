
const User = require("../models/user")
const jwt = require("jsonwebtoken");
const { MaxKey } = require("bson");

const hataYakala = (err) => {
    let errors = {email:'', parola:''};
    
    if(err.code===11000)
    {

        errors.email = 'Bu mail adresi önceden girilmiştir.';
        return errors;

    }


    if(err.message.includes('users validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
          errors[properties.path] = properties.message;
        });
    }
    if(err.message === "email-hatasi"){
        errors.email = "Email adresini yanlış girdiniz"
    }

    if(err.message === 'par-hatasi'){
        errors.parola = 'Parolayı yanlış girdiniz'
    }
    return errors;
}
const maxAge = 3*24*60*60*1000;

const createToken = (id) => {
    return jwt.sign({id},'deneme',{
        expiresIn:maxAge
    })
}

module.exports.signup_get = (req,res) => {
    res.render("signup");
}


module.exports.login_get = (req,res) => {
    res.render("login")
}

module.exports.signup_post = async (req,res) => {
    const {email,parola} = req.body;
    
    try{
        const user = await User.create({email,parola})
        const token = createToken(user._id)
        res.cookie('jwt',token,{
            httpOnly:true,
            maxAge:maxAge
        })
        res.status(201).json(user)

    }catch(error) {
        
        const errors = hataYakala(error)
        res.status(400).json({errors})
    }
}

module.exports.logout_get = (req,res) => {
    res.cookie("jwt","çıkış yapıldı",{maxAge:1});
    res.redirect('/')
}

module.exports.login_post = async (req,res) => {
    const {email,parola} = req.body;


    try {
        const user = await User.login(email,parola);
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge})
        res.status(200).json({user:user._id});
    } catch (error) {
        
        console.log(error)
        
        const errors = hataYakala(error);
        res.status(400).json({errors});
    }


    // console.log(email,parola) 
    // res.send("kullanıcı girişi yapıldı")
}