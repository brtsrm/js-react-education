const notlar = [45, 51, 1, 341, 234, 12, 35];
let yuksekNotlar;


yuksekNotlar = notlar.filter(not => {
    return not > 80;
});
console.log(yuksekNotlar);


let ogrenciler = [
    { isim: 'Berat', not: 45 },
    { isim: 'Veysel', not: 100 },
    { isim: 'Cuma', not: 99 },
    { isim: 'Deger', not: 98 },
]


let yuksekNotAlanOgrenciler = ogrenciler.filter((ogre) => {
    return ogre.not>98;
})

console.log(yuksekNotAlanOgrenciler)