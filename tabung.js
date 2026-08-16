const prompt = require("prompt-sync")({ sigint: true });
console.log('=================')
console.log("KALKULATOR TABUNG");
console.log('=================');
const PHI = 3.14
let r = Number(prompt("Jari-jari : "))
let t = Number(prompt("Tinggi : "))
let luas = 2 * PHI * r * (r + t)
let volume = PHI * r * r * t
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)