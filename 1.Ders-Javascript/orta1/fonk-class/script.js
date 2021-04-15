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

const personel = new Personel("Berat", "Bilgi işlem", "Yazılım uzmanı")

console.log(personel)
personel.isYap()