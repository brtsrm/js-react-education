const metinDizi = ['metin', 'ali', 'berat'];

// A-z listelemesini yapıyor
metinDizi.sort();
// console.log(metinDizi)

// Tersine çevrioyr
metinDizi.reverse();
// console.log(metinDizi)


const sayiDizisi = [12, 45, 78, 88, 97, 85];
sayiDizisi.sort()
// console.log(sayiDizisi)
sayiDizisi.reverse()
// console.log(sayiDizisi)


const nesneDizi = [
    { isim: 'zeynep', not: 26 },
    { isim: 'berat', not: 56 },
    { isim: 'kerem', not: 76 },
    { isim: 'medine', not: 86 },
]
nesneDizi.sort((ilk, ikinci) => {
    if (ilk.not < ikinci.not) {
        return -1;
    } else if (ilk.not > ikinci.not) {
        return 1;
    } else {
        return 0;
    }
})


