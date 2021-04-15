// DIş kaynaktan veri alınırken bir süre beklemesi

const verileriGetir = (kaynak) => {
    
    return new Promise((resolve,reject) => {
        // Resolve doğru veriyi gösteriri
        resolve('Veriler Çekildi')
        // Reject Hatalı işlemi gösterir
        reject("Hatalı istek")
    })
}

verileriGetir().then(veri => {
    // doğru veriyi çalıştırı
    console.log(veri)
}).catch((err) => {
    console.log(err)

    // Hatalı veriyi çalışıtır
})