"use strict";

var express = require("express");

var Ders = require("../models/ders");

var router = express.Router();

var dersController = require("../controllers/dersController");

router.get("/dersler", dersController.ders_index);
router.get('/ders/ekle', function (req, res) {
  res.render('ders_ekle');
});
router.post("/ders-ekle", dersController.ders_ekle);
router.get('/dersler/:id', dersController.ders_getir);
router["delete"]('/dersler/:id', dersController.ders_sil);
module.exports = router;