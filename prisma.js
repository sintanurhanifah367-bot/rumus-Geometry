const prompt = require("prompt-sync")({ sigint: true });
console.log('=================')
console.log("KALKULATOR PRISMA");
console.log('=================');
let la = Number(prompt("Luas Alas : "))
let ka = Number(prompt("Keliling Alas : "))
let t = Number(prompt("Tinggi : "))
let luas = (2 * la) + (ka * t)
let volume = la * t
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)