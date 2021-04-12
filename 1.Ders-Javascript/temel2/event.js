const button = document.querySelector("button")

// button.addEventListener('click',() => {
//     console.log("merhaba berat")
// })

const input = document.querySelector("input")

input.addEventListener("click", (e) => {
    console.log(button.disabled);
    if (!input.checked) {
        button.disabled = true
        button.innerText = "Pasif"
    } else {
        button.disabled = false
        button.innerText = "Aktif"
    }
})

const li = document.querySelectorAll("li")

li.forEach(i => {
    i.addEventListener('click', (e) => {
        // console.log(e.target);
        e.target.style = 'text-decoration:line-through'
    })
})