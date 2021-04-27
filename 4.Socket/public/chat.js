var socket = io.connect("http://localhost:3000");

var mesaj = document.querySelector("#message"),
    baslik = document.querySelector("#handle"),
    btn = document.querySelector("#send"),
    output = document.querySelector("#output"),
    feedback = document.querySelector("#feedback");

btn.addEventListener("click", () => {
    socket.emit('chat', {
        mesaj: mesaj.value,
        baslik: baslik.value
    })
    mesaj.value = '';
})

mesaj.addEventListener("keypress",() => {
    socket.emit('yaziyor',baslik.value)
})

socket.on('chat2', (data) => {

    // console.log(data)

    output.innerHTML += `<p><strong>${data.baslik}</strong><br />${data.mesaj}</p>`;

})
socket.on('yaziyor', (data) => {


    feedback.innerHTML = `<p><em>${data}</em> yazıyor...</p>`;

})