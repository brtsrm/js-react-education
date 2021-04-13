const metinDizi = ['metin', 'ali', 'berat'];


console.log(metinDizi.sort())

console.log(metinDizi.reverse())


const sayi = [12, 13, 14, 15, 16, 17]

console.log(sayi.sort())

console.log(sayi.reverse())


const nesneDizisi = [
    { isim: 'Berat', not: 60 },
    { isim: 'Medine', not: 62 },
    { isim: 'Kerem', not: 61 },
    { isim: 'Zeynep', not: 63 },
]

nesneDizisi.sort((ikinci, birinci) => {
    if (ikinci.isim > birinci.isim) {
        return -1;
    }
})
console.log(nesneDizisi)