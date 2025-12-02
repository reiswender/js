/* Tabela verdade
    // Operadores binários - dois operandos
    V e V -> V
    V e F -> F
    F e ? -> F

    V ou ? -> V
    F ou V -> V
    F ou F -> F

    V xor V -> F
    V xor F -> V
    F xor V -> V
    F xor F -> F

    // Operadores unários - um operando
    !V -> F
    !F -> V
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))