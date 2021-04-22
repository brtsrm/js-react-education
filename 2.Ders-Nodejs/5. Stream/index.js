const fs = require("fs");
const streamOku = fs.createReadStream("./dosyalar/uzun.txt",{encoding:'utf-8'});
// streamOku.on('data',(veri) => {
//     console.log('---veri yığın----')

//     console.log(veri)   
    
// })


const streamYaz = fs.createWriteStream('./dosyalar/yaz1.txt')

// streamOku.on('data',(veri) => {
//     streamYaz.write(veri)
// })

streamOku.pipe(streamYaz)