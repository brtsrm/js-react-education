 let kullanici = {

     isim: 'Berat',
     soyisim: 'SARMIŞ',
     yas: 30,
     tel: '555555555',
     kurslar: ['javascript', 'laravel', 'react', 'react-native'],

     girisYap() {
         console.log('giriş yapıldı')
     },

     kursOlustur(kurs) {
         console.log(`${kurs} kursu oluşturuldu`);
         this.kurslar.push(kurs)
     },
     kurslarGetir(){
         console.log(kullanici.kurslar)
     }
 }

 kullanici.girisYap()
 kullanici.kursOlustur('Laravel');

 kullanici.kurslarGetir()


let kullanicilar = [
    {isim : 'Berat', soyisim : 'SARMIŞ', yas : 30},
    {isim : 'Osman', soyisim : 'SARMIŞ', yas : 30},
    {isim : 'Veysel', soyisim : 'SARMIŞ', yas : 30},
]
console.log(kullanicilar[0].isim)

let kullanici = {
    isim : 'Kerem',
    soyisim : 'SARMIŞ',
    yas:26
}

kullanicilar.push(kullanici)


console.log(kullanicilar)