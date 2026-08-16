const prompt = require("prompt-sync")({ sigint: true });
console.log('=============================')
console.log("KALKULATOR SETENGAH LINGKARAN");
console.log('=============================');
const PHI = 3.14
let r = Number(prompt("Jari-jari : "))
let luas = 1/2 * PHI * r * r
let keliling = (PHI * r) + 2 * r
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)