let simdikiZaman = new Date();

let eskiTarih = new Date(1996,12,12);

console.log(simdikiZaman);
console.log(eskiTarih)

let eskiTarihSaat = new Date(2020,12,06,12,12,12)

console.log(eskiTarihSaat)


var fark1 = simdikiZaman - eskiTarih;
console.log(fark1)

var fark2 = simdikiZaman.getTime()-eskiTarih.getTime();
console.log(fark2)

const dakika = Math.round(fark1/1000/60)
console.log(dakika)

const saat = Math.round(dakika / 60)
console.log(saat)

const gun = Math.round(saat / 24)
console.log(gun);

let timeStamp = new Date().getTime();
console.log(timeStamp)

console.log(new Date(fark1))