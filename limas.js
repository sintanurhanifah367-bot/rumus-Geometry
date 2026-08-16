const prompt = require("prompt-sync")({ sigint: true });
console.log('================')
console.log("KALKULATOR LIMAS");
console.log('================');
let la = Number(prompt("Luas Alas : "))
let lst = Number(prompt("Luas Sisi Tegak : "))
let t = Number(prompt("Tinggi : "))
let luas = la + lst
let volume = 1/3 * la * t
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)