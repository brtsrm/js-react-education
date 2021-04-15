const tarih = new Date();

// Tipini gösteriri
console.log(typeof tarih)

// Yil getirir
let yil = tarih.getFullYear()
console.log(typeof yil)

// Ay getirir
let ay = tarih.getMonth()
console.log(ay)


// Haftanin hangi gunundeyiz
let HaftaninHangiGunu = tarih.getDay()
console.log(HaftaninHangiGunu)

// Gun getirir
let gun = tarih.getDate()
console.log(gun)

console.log('saat :' + tarih.getHours());
console.log('dakika :' + tarih.getMinutes());
console.log('saniye :' + tarih.getSeconds());

console.log(tarih.toDateString())
console.log(tarih.toTimeString())
console.log(tarih.toLocaleString());

console.log(tarih.getTime())