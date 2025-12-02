let a = 7
let b = 94

console.log("Valor de a - Rodada 1: " + a)
console.log("Valor de b - Rodada 1: " + b)

let temporario = a;
a = b
b = temporario

console.log(" ")

console.log("Valor de a - Rodada 2: " + a)
console.log("Valor de b - Rodada 2: " + b)