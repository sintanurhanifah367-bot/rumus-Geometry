const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR BELAH KETUPAT");
console.log('========================');
let s = Number(prompt("Sisi : "))
let d1 = Number(prompt("Diagonal 1 : "))
let d2 = Number(prompt("Diagonal 2 : "))
let keliling = 4 * s
let luas = 1/2 * d1 * d2
console.log(`
    Keliling    : ${keliling} cm
    Luas        : ${luas} cm2`)