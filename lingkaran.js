const prompt = require("prompt-sync")({ sigint: true });
console.log('====================')
console.log("KALKULATOR LINGKARAN");
console.log('====================');
const PHI = 3.14
let r = Number(prompt("Jari-jari : "));
let d = Number(prompt("Diameter : "));
 let luas = PHI * r * r
 let keliling = PHI * d
 console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)