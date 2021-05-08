const mongoos = require("mongoose")

const {isEmail} = require("validator")

const bcrypt = require("bcrypt")

const usersSchema = new mongoos.Schema({
    email : {
        type:String,
        require:[true,'Mail adresini girilmesi zorunludur.'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Lütfen geçerli bir mail adresi giriniz']
    },
    parola : {
        type:String,
        required:true,
        minlength:[6,"En az 6 karakter olması lazım"]
    }
});

usersSchema.pre("save",async function(next) {
    const salt = await bcrypt.genSalt();
    this.parola = await bcrypt.hash(this.parola,salt);
    next();
})

usersSchema.statics.login = async function(email,parola){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(parola,user.parola);
        if(auth){
            return user;
        }

        throw Error("par-hatasi");
    }
    
    throw Error("email-hatasi");
}

const users = mongoos.model("users",usersSchema)

module.exports = users;