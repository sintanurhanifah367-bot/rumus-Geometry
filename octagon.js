const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR OCTAGON");
console.log('==================');
let s = Number(prompt("Sisi : "))
let luas = 2 * (1 + 2 * 1/2) * s * s
let keliling = 8 * s
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)