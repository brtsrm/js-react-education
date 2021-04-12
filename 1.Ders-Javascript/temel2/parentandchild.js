const div = document.querySelector("div");
// div'in çocuklarını getir
console.log(div.children)
// çağırdğımız nesnelerin hepsini dizin yap
console.log(Array.from(div.children))

// div içindeki 1. indexi getir
console.log(div.children[1]);

const h4 = document.querySelector("h4");

// h4 bir üstün bir üstünü getir
console.log(h4.parentElement.parentElement)
// h4'ün bir sonraki taga git onun altındaki 2 index çağır
console.log(h4.nextElementSibling.children[2])

// h4'ün bir sonraki taga git onun altındaki 2 index çağır ve onun bir önceki veri hangsi ise getir
console.log(h4.nextElementSibling.children[2].previousElementSibling)