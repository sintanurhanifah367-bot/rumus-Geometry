const prompt = require("prompt-sync")({ sigint: true });
console.log('===============')
console.log("KALKULATOR BOLA");
console.log('===============');
const PHI = 3.14
let r = Number(prompt("Jari-jari : "))
let luas = 4 * PHI * r * r
let volume = 4/3 * PHI * r * r * r
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)