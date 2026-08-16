const prompt = require("prompt-sync")({ sigint: true });
console.log('================')
console.log("KALKULATOR KUBUS");
console.log('================');
let s = Number(prompt("Sisi : "))
let luas = 6 * s * s
let volume = s * s * s
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)