const nesne = document.querySelector(".nesne");
// Get attribute ile class'ın içindeki değeri getirdik.
// console.log(nesne.getAttribute('class'))


const kurslar = document.querySelector(".kurslar");
console.log(kurslar.getAttribute("style"));

kurslar.setAttribute("style", "color:crimson")

const lia = document.querySelectorAll("li");

lia.forEach(element => {
    element.setAttribute("style", "color:red")
});