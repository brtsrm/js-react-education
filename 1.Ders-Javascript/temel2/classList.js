const baslik = document.querySelectorAll('h1');

console.log(baslik[0].classList);
// Ekleme
baslik[0].classList.add("app")
// Remove Kullanımı
baslik[0].classList.remove("app")
// Toggle kullanımı
baslik[0].classList.toggle("deneme")


const li = document.querySelectorAll("li");

li.forEach(val => {
    console.log(val.innerHTML)
    console.log(val.textContent)
    if(val.textContent.includes("Udemy")){
        val.classList.add("udemy")
    }else{
        val.classList.add("youtube")
    }
})