// DIş kaynaktan veri alınırken bir süre beklemesi

const verileriGetir = (kaynak) => {
    
    return new Promise((resolve,reject) => {

        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange",() => {
            if(request.readyState == 4 && request.status == 200){
                let veriler = JSON.parse(request.responseText)
                resolve(veriler)
            }else if(request.readyState == 4){
                reject("Bir Hata oluştu")
            }
        });
        request.open("GET",kaynak)
        request.send()
    })
}

// verileriGetir("veriler.json").then(veri => {
verileriGetir("https://jsonplaceholder.typicode.com/todos").then(veri => {
    // doğru veriyi çalıştırı
    console.log(veri)
}).catch((err) => {
    console.log(err)

    // Hatalı veriyi çalışıtır
})