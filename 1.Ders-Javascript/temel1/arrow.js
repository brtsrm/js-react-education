
var daireAlaniHesapla = (r) => {


    return 3.14 * r ** 2;

}

console.log(daireAlaniHesapla(145141))

var kareAl = (a) => a ** 2;

console.log(kareAl(5))


const hesapla = (bir, iki, islem) => {
    let sonuc;

    switch (islem) {
        case '+':
            sonuc = bir + iki;
            break;
        case "-":
            sonuc = bir - iki;
            break;
        case "*":
            sonuc = bir * iki;
            break;
        case "/":
            sonuc = bir / iki;
            break;
    }

    return sonuc;
}

console.log(hesapla(12,121,"/ "));