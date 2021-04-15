// const karesiniAl = (sayi1, sayi2) => {
//     console.log(sayi1, sayi2)
//     let dizi = [sayi1, sayi2]
//     return dizi.map((say) => {
//         return say * say;
//     })
// }


// console.log(karesiniAl(2, 3))

const karesiniAl2 = (...sayilar) => {
    console.log(sayilar)
    return sayilar.map(sayi => sayi * sayi)
}


console.log(karesiniAl2(12, 4, 41, 516, 73, 5, 775, 32))