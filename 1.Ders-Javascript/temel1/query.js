// const p = document.querySelector(".personel");
// const p = document.querySelector("#personel");
const p = document.querySelector("p");

p.innerHTML = "<h1>Berat</h1>"

console.log(p);


const ul = document.querySelector('.diller');

const diller = ['React','React-native','Larave'];

let html = ``;

diller.forEach(function(diller){


    html += `<li>${diller}</li>`

})

ul.innerHTML = html;