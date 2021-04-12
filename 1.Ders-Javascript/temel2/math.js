// console.log(Math)

let deger1 = 4.3;
let deger2 = 4.8;

/* Yuvalarma Yapar */
// Çıktı : 4
console.log(Math.round(deger1))
// Çıktı : 5
console.log(Math.round(deger2))

/* Aşağı yuvarlamasını yapar */
// Çıktı : 4
console.log(Math.floor(deger1))
// Çıktı : 4
console.log(Math.floor(deger2))

/* Yukarı yuvarlamasını yapar */
// Çıktı : 5
console.log(Math.ceil(deger1))
// Çıktı : 5
console.log(Math.ceil(deger2))

/*  Noktan sonrasını siler*/
// Çıktı : 5
console.log(Math.trunc(deger1))
// Çıktı : 5
console.log(Math.trunc(deger2))


// POW : üzeri işlemi yapar
console.log(Math.pow(2, 8))

// Karakökünü alır
console.log(Math.sqrt(64))

// Max büyüğü bulur
console.log(Math.max(0, 50));
// Min büyüğü bulur
console.log(Math.min(0, 50));


// Rastgele sayılar
let rast = Math.random();
console.log(rast)
console.log(Math.round(rast*100)+50);