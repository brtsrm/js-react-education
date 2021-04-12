// Html dosyasındaki class adlı p taginına erşimi sağlandık
const ad = document.querySelector(".ad");
console.log(ad);

// Node olarak geri dönüş yapıyor lileri dizin olarak geliyor
const kurslar = document.querySelectorAll("li");
console.log(kurslar)

// lilerin hepsini listelemesini yaptık
kurslar.forEach(data => console.log(data)) 

// sadece bir tanesine erişim yapalım
console.log(kurslar[1]);


// Id çağırma
const yas = document.getElementById("yas");
console.log(yas)

// P tagına erişim
const paragraflar = document.getElementsByTagName("p");
console.log(paragraflar[0])

// Class bazlı çağırma.
const className = document.getElementsByClassName("nesne");
console.log(className)