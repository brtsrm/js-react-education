const dizi = [12, 13, 88, 5, 6, 7, 12, 6, 133, 1313];

const sonuc = dizi.reduce((key, deger) => {

    key = key + deger;
    return key;
}, 1)

console.log(sonuc);