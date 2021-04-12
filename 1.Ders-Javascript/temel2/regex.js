let parola = "berat123";

let desen = /[a-z0-9]{7,}/;
// Sonuç sağlanırsa true | sağlanmaz ise false
let sonuc = desen.test(parola)
// console.log(sonuc);



// Sonuç sağlanırsa : -1 bir olarak dönüyor. 
// Sağlanmaz ise : 0 olarak dönüyor
sonuc = parola.search(desen);
console.log(sonuc);