const work = require("../models/Work")
module.exports.work_add_get = (req,res) => {
    res.render("work-add");
}

module.exports.work_add_post = async (req,res) => {
    const {baslik,aciklama,baslama,bitis} = req.body;

    try{
        const works = await work.create({
            baslik,
            aciklama,
            baslamaZamani:new Date(baslama),
            bitisZamani : new Date(bitis),
            kullaniciId:res.locals.user._id
        })
        res.status(200).json({work:works._id})
    }catch(err){

        res.status(400).json({err})

    }
}

module.exports.works_get = (req,res) => {
    work.find({'kullaniciId':res.locals.user._id}).then((result) => {
        res.render('works', {isler : result})
    })
}