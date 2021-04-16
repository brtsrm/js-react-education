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


// stringify ve pars


const veriler = [
    { isim : 'berat', yas : 25},
    { isim : 'berat', yas : 35},
    { isim : 'berat', yas : 45}
]

console.log(veriler)

localStorage.setItem('veriler',veriler)
localStorage.setItem('veriler2',JSON.stringify(veriler))

let storage = localStorage.getItem('veriler')
let storage2 = localStorage.getItem('veriler2')
console.log(storage)
console.log(JSON.parse(storage2))

