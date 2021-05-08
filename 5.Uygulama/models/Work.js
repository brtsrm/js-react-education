const mongoose = require("mongoose")

const workSchema = new mongoose.Schema({

    baslik : {
        type:String,
        require:true
    },
    aciklama : {
        type:String
    },
    baslamaZamani: {
        type:Date
    },
    bitisZamani: {
        type:Date
    },
    kullaniciId : {
        type:String
    }

})
const work = mongoose.model("works",workSchema)


module.exports = work;