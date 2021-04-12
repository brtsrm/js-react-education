const dizi = [12, 13, 88, 5, 6, 7, 12, 6, 133, 1313];

const ilkFind = dizi.find(p => {
    return p > 30;
})

const ilkFilter = dizi.filter(p => {
    return p > 30;
})

console.log(ilkFind)
console.log(ilkFilter)