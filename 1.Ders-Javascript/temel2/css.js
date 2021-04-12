const content = document.querySelector(".content");
// Style özelliği atama
content.style.border = "2px solid #aaa";

// Ad sınıfının soldan 100px boşluk bıraktok ve yazısını büyüttük.
const baslik = document.querySelector(".ad");
baslik.style.fontSize = "50px";
baslik.style.marginLeft = "100px";


// Kaç tane li var hesapladık.
const li = document.querySelectorAll('li');
console.log(li.length)

// lilerin hepsini bir döngüye soktuk ve ekranda yazdır.
li.forEach((val,key) => {
    const renk1 = Math.round(Math.random()*255) + key;
    const renk2 = Math.round(Math.random()*255) + key;
    const renk3 = Math.round(Math.random()*255) + key;

    val.style.color = `rgb(${renk1},${renk2},${renk3})`;
    
})