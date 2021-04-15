// let personel1  ={
//     ad : 'Berat',
//     birim : 'Bilgi işlem',
//     gorev : 'Yazılım'
// }

// console.log(personel1)

// let personel2 = {
//     ad : 'Kerem',
//     birim: 'Bilgi işlem',
//     gorev: 'Yazılım'
// }

// console.log(personel2)

class Personel{
    constructor(ad){
        this.ad = ad,
        this.birim = 'Bilgi işlem',
        this.gorev = 'Yzılım'

    }
    isYap(){
        console.log(`${this.ad} ${this.gorev} görevini gerçekleştirdi. `);
        return this;
    }
    toplantiyaGir(){
        console.log(`${this.ad} Toplantıya girdi`);
        return this;
    }
}
