const dizi = [21, 32, 244, 4343, 5, 13, 4];

const yeniDizi = dizi.map(val => {

    if (val > 50) {
        return { yeniDiziEleman: val / 2, eskiDeger: val }
    } else {
        return { diziElaman: val }
    }

})

console.log(yeniDizi)

const nesneDizisi = [
    { isim: 'Berat', uyelik: true },
    { isim: 'Kerem', uyelik: false },
    { isim: 'Murat', uyelik: true },
    { isim: 'Medine', uyelik: false },
    { isim: 'Zeynep', uyelik: true },
    { isim: 'Çiğdem', uyelik: false },
]


let yeniDizi = nesneDizisi.map(val => {

    if (val.uyelik === true) {
        console.log(`Bu ${val.isim} Kişinin üyeliği aktif`);
    } else {
        console.log(`Bu ${val.isim} Kişinin üyeliği aktif değil`);

    }

})