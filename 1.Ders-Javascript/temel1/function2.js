const kupTabanAlani = function (genislik, en) {
    let alan = genislik * en;
    return alan;
}

let alan = kupTabanAlani(5, 6);
console.log(alan);


const kupHacmi = function (yukseklik, alan) {
    return yukseklik * alan;
}

let kupHacim = kupHacmi(50, alan);

console.log(kupHacim)