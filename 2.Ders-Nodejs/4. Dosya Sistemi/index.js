const fs = require("fs");

// DOSYA OKUMA
// fs.readFile('./files/bilgi.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         // Buffer olarak çıkıyor ekrana
//         console.log(data)
//         // Buffer stringe çevirme
//         console.log(data.toString())
//     }
// })


// Dosyaya yazma
// fs.writeFile("./files/bilgi.txt",'bilgiler',() => {
//     console.log("Yazmış olduğunuz veri başarılı bir şekilde kayıt edilmiştir")
// })


// Dizin oluşturma

// fs.mkdir("./dosyalar", (err) => {
//     if(err) 
//     {
//         console.log("Hata var")
//     }else{
//         console.log("dosya oluşturuldu")
//     }
// })

// Dizini var olup olmadığını kontrol etme var ise sil yok ise ekle
// const dizinAdi = './dosyalar1';
// if (fs.existsSync(dizinAdi)) {
//     fs.rmdir(dizinAdi, (err) => {
//         console.log("dizin başarılı bir şekilde silinmiştir")
//     })
// } else {
//     fs.mkdir("./dosyalar1", (err) => {
//         if (err) {
//             console.log("Hata var")
//         } else {
//             console.log("dosya oluşturuldu")
//         }
//     })
// }

const dosyaAdi = "./files/bilgi.txt";
if (fs.existsSync(dosyaAdi)) {
    fs.unlink(dosyaAdi, (err) => {
        if (err) {
            console.log("bir hata var, kodlarını bir gözden geçirirmisin")
        } else {
            console.log("Dosya başarılı bir şekilde silinmiştir")
        }
    })
}
