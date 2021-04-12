function sayiYaz(){
    console.log(30);
}

sayiYaz()


const yaziYaz = function(){
    console.log("Berat SARMIŞ")
}

yaziYaz()

const parametreliFonk = function(sayi){
    console.log(`Sayı : ${sayi}`);
}

parametreliFonk(20)
parametreliFonk(20)
parametreliFonk(20)

const ikiParamtreliFonk = function(sayi,yazi){

    console.log(`Sayi : ${sayi} ve yazi : ${yazi}`)

}

ikiParamtreliFonk(31,"React Native")


const defaultFonk = function(sayi = 20,yazi = "React"){

    console.log(`sayi : ${sayi} ve yazi : ${yazi}`)

}

defaultFonk(60,'Berat');
defaultFonk(45);
const argumanFnk = function({sayi,yazi = "berat"}){
    console.log(`Sayı : ${sayi} and Yazi : ${yazi}`)
}
argumanFnk({sayi : 21})








