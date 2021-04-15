// local storage veri ekleme
localStorage.setItem("isim","ali");
localStorage.setItem("yas",21)


let isim = localStorage.getItem("isim")

console.log(isim)
// localstorage'teki veriyi çağırma
let yas = localStorage.getItem("yas");
console.log(yas)
// local storage silme
localStorage.removeItem("yas")

// Hepsini siler
localStorage.clear()