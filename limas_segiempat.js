const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log("KALKULATOR LIMAS SEGIEMPAT");
console.log('==========================');
let p = Number(prompt("Panjang : "))
let l = Number(prompt("Lebar : "))
let t = Number(prompt("Tinggi : "))
let ts = Number(prompt("Tinggi Sisi : "))
let la = p * l
let luas = la + 2 * 1/2 * p * ts + 2 * 1/2 * l * ts
let volume = 1/3 * p * l * t
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)