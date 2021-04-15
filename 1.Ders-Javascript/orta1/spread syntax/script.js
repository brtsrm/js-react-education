const isimler = ["mehmet", "gul", "cem"]

// ÇIKTI : Array(3) [ "mehmet", "gul", "cem" ]
console.log(isimler)
// ÇIKTI : mehmet gul cem
console.log(...isimler)


const uyeler = [...isimler, "Veysel"]
// ÇIKTI : Array(4) [ "mehmet", "gul", "cem", "Veysel" ]
console.log(uyeler)


const calisan = { ad: 'Ali', yas: 30, birim: 'Bilgi işlem' };
const calisanKlon = { ...calisan, unvan: 'Patron' };

calisanKlon.unvan = "Team of leader"
calisan.unvan = "Memur"
console.log(calisanKlon)
console.log(calisan)