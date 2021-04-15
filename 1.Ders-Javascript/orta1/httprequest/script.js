// https://jsonplaceholder.typicode.com/todos/1
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();

request.addEventListener("readystatechange", () => {
    // console.log(request)
    if (request.readyState === 4) {
        if (request.status === 200) {
            console.log(request.responseText)
        }

    }
});


const todoOlustur = (callBack) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            callBack(request.responseText, undefined)
        } else if (request.readyState == 4) {
            callBack(undefined, "Hata oluştu");
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send()
};

todoOlustur((ver, hata) => {
    if (hata) {
        console.log(hata);
    } else {
        console.log(ver)
    }
})

