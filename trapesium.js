const prompt = require("prompt-sync")({ sigint: true });
console.log('====================')
console.log("KALKULATOR TRAPESIUM");
console.log('====================');
let a = Number(prompt("Sisi Atas : "))
let b = Number(prompt("Sisi Bawah : "))
let c = Number(prompt("Sisi Miring Kiri : "))
let d = Number(prompt("Sisi Miring Kanan : "))
let t = Number(prompt("Tinggi : "))
let luas = 1/2 * (a + b) * t
let keliling = a + b + c + d
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)