const express = require("express")
const Ders = require("../models/ders")
const router = express.Router();
const dersController = require("../controllers/dersController")

router.get("/dersler",dersController.ders_index  )
router.get('/ders/ekle',(req,res) => {
    res.render('ders_ekle')
})
router.post("/ders-ekle",dersController.ders_ekle)
router.get('/dersler/:id',dersController.ders_getir)
router.delete('/dersler/:id',dersController.ders_sil)

module.exports = router;