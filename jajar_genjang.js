const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log("KALKULATOR JAJAR GENJANG");
console.log('========================');
let a = Number(prompt("Alas : "))
let sm = Number(prompt("Sisi Miring : "))
let t = Number(prompt("Tinggi : "))
let luas = a * t
let keliling = 2 * (a + sm)
console.log(`
    Luas     : ${luas} cm2
    Keliling : ${keliling} cm`)