const prompt = require("prompt-sync")({ sigint: true });
console.log('===================')
console.log("KALKULATOR HEKTAGON");
console.log('===================');
const PHI = 3.14
let s = Number(prompt("Sisi : "))
let luas = 795.77 * s * s
let keliling = 100 * s
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)