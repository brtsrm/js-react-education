"use strict";

var work = require("../models/Work");

module.exports.work_add_get = function (req, res) {
  res.render("work-add");
};

module.exports.work_add_post = function _callee(req, res) {
  var _req$body, baslik, aciklama, baslama, bitis, works;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, baslik = _req$body.baslik, aciklama = _req$body.aciklama, baslama = _req$body.baslama, bitis = _req$body.bitis;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(work.create({
            baslik: baslik,
            aciklama: aciklama,
            baslamaZamani: new Date(baslama),
            bitisZamani: new Date(bitis),
            kullaniciId: res.locals.user._id
          }));

        case 4:
          works = _context.sent;
          res.status(200).json({
            work: works._id
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(400).json({
            err: _context.t0
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

module.exports.works_get = function (req, res) {
  Work.find({
    'kullaniciId': res.locals.user._id
  }).then(function (result) {
    res.render('works', {
      isler: result
    });
  });
};