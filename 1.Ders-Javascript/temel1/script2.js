 for(let i=0;i<10;i++)
 {
      console.log(i)
 }                                                   

 let dizi = ["berat","kerem","medine"];

 for(let i = 0;i < dizi.length;i++){
     console.log(i)
 }


 let ul = `<ul>`

 for(let i = 0;i < dizi.length;i++)
 {
     ul = ul.concat(`
     <li>
         ${dizi[i]}
     </li>
     `);
 }
 ul = ul.concat(`</ul>`)
 console.log(ul)


 let i = 0;

 while(i < 500){
     console.log(i)
     i+=50;    
 }

 let i = 0;
 do{
     console.log(i);
     i+=3;
 }while(i < 15);



 let sayi = 20;
 if(sayi == 20){
     console.log("Evet Eşit")
 }else{
     console.log("Hayıt eşit değil");
 }


 const dizi = [1,2,3,4,5,6,7,312,123,231,321145,50];
 for (let index = 0; index < dizi.length; index++) {
     const element = dizi[index];
      if(element == 123){
          continue;
      }
      console.log(element)

     if(element == 123){
         break;
     }
     console.log(element)
 }









let not = 'CC';

switch (not) {
    case "AA":
        console.log("notunuz aa");
        break;
    case "BB":
        console.log("Notunuz BB");
        break;
    case "CC":
        console.log("Notunuz CC");
        break;
    default:
        console.log("Kaldın seneye tekrardan gel")

}




















