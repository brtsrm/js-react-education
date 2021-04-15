let bilgisayar = {}

bilgisayar.marka = "msi";
// bilgisayar["harddisk"] = "sdd"
// bilgisayar["harddisk"] = "sata"




const sembol1 = Symbol('deger')
const sembol2 = Symbol('deger');

console.log(sembol1,typeof sembol2)

const hardDiskSembol1 = Symbol('hardDisk')
const hardDiskSembol2 = Symbol('hardDisk')

bilgisayar[hardDiskSembol1] = "sdd"
bilgisayar[hardDiskSembol2] = "sata"

console.log(bilgisayar)

console.log(bilgisayar[hardDiskSembol1])