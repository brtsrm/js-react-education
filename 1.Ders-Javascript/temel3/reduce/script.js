const dizi = [1, 2, 3];

const sonuc = dizi.reduce((key, deger) => {

    key = key + deger;
    return key;
}, 1)

console.log(sonuc);