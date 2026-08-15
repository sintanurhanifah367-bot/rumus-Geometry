const prompt = require("prompt-sync")({ sigint: true });
console.log('================')
console.log("KALKULATOR BALOK");
console.log('================');
let p = Number(prompt("Panjang : "))
let l = Number(prompt("Lebar : "))
let t = Number(prompt("Tinggi : "))
let luas = 2 * (p * l + p * t + l * t)
let volume = (p * l * t)
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)