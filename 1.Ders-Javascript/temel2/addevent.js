const buton = document.querySelector("button");
const list = document.querySelectorAll('li');

const ul = document.querySelector("ul")
buton.addEventListener('click', () => {

    // ul.innerHTML += '<li>Javascript</li>'
    // yeni bir tag üretir
    const li = document.createElement('li');
    // üretilen tagin içerisine yazma
    li.textContent = 'yeni kurs'
    // Sonuna ekleme yapar
    // ul.append(li)
    // En başına ekleme yapılır
    ul.prepend(li)
})


list.forEach(kurs => {
   kurs.addEventListener("click",(e) => {
       e.target.remove()
   })
});