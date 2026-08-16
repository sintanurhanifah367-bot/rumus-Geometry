const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR KERUCUT");
console.log('==================');
const PHI = 3.14
let r = Number(prompt("Jari-jari : "))
let t = Number(prompt("Tinggi : "))
let s = Number(prompt("Sisi : "))
let luas = PHI * r * (r + s)
let volume = 1/3 * PHI * r * r * t
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)