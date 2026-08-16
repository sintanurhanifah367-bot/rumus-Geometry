const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR LAYANG-LAYANG");
console.log('========================');
let a = Number(prompt("Sisi 1 : "))
let b = Number(prompt("Sisi 2 : "))
let d1 = Number(prompt("Diagonal 1 : "))
let d2 = Number(prompt("Diagonal 2 : "))
let luas = 1/2 * d1 * d2
let keliling = 2 * (a + b)
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)