/*
    Área da circunferência
    A = PI * raio * raio
    PI = 3.141592
*/

// Entrada
const PI = 3.141592
let raio = 12

// Processamento
let area = PI * Math.pow(raio, 2)

// Saída
console.log("A área da circunferência é " + area.toFixed(2) + " m2")