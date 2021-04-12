// Primitive

/*


 Number
 String
 Boolean
 Null
 undefined

 stack alanında tutulur

*/

// REference

/*
 - Object
 - Array
 - Function
 - Date

 heap alanında tutulur
*/

let deger1 = 100;
let deger2= deger1;
console.log(deger2)


deger1 = 400;
console.log(deger1,deger2)

let obj1 = {
    isim : 'Ali',
    yas : 30
}
let obj2 = obj1;

console.log(obj1,obj2)