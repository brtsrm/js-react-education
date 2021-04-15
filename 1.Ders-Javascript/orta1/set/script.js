const dizi1 = ["berat","cem","kerem","cem"];

console.log(dizi1)
const dizi2 = new Set(["berat","cem","kerem","berat"])

console.log(dizi2)


const sayilar = new Set();

sayilar.add(25)
sayilar.add(30).add(25)
// sayilar.delete(25)

console.log(sayilar.size)
console.log(sayilar)
console.log(sayilar.has(25))


