function Personel(ad, birim, gorev) {
    this.ad = ad;
    this.birim = birim;
    this.gorev = gorev;

    // this.isYap = function () {
    //     console.log("İş yap")
    // }
}

Personel.prototype.isYap = function () {
    console.log(`${this.ad} iş yapıldı`)

}

function Yonetici(ad, birim, gorev, unvan) {

    Personel.call(this, ad, birim, gorev)
    this.unvan = unvan;


}
Yonetici.prototype = Object.create(Personel.prototype)
Yonetici.prototype.personelKov = function(){
    console.log("Personel kovuldu");
}

const personel = new Personel("Berat", "Bilgi işlem", "Yazılım uzmanı")
const yonetici = new Yonetici('Cem', "Team Leader", "Ceo", "Dijital God")

console.log(personel)
console.log(yonetici)


personel.isYap()
yonetici.isYap()
yonetici.personelKov()
