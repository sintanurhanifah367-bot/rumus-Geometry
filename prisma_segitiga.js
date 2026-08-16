const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log("KALKULATOR PRISMA SEGITIGA");
console.log('==========================');
let la = Number(prompt("Luas alas : "))
let ka = Number(prompt("Keliling alas : "))
let ta = Number(prompt("Tinggi alas : "))
let t = Number(prompt("Tinggi : "))
let a = Number(prompt("Sisi : "))
let luas = (2 * la) + (ka * t)
let volume = 1/2 * a * ta * t
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)