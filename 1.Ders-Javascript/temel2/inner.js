
const ad = document.getElementsByClassName("ad")
console.log(ad[0].innerText)
ad[0].innerText = "BERAT";

const yas = document.querySelector("#yas");

yas.innerText += " 1996 Doğumlu";




const content = document.querySelector(".content");
content.innerHTML = "Üyelik tarihi <b>1 Mayıs</b>"

const ul = document.querySelector("ul")

let addCourse = ["Socketio"];

addCourse.forEach(element => {
    ul.innerHTML += `<li>${element}</li>`
});