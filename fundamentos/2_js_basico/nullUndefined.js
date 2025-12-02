// Undefined = a variável não recebe valor
let valor
console.log(valor)

// Null = ausência de valor
valor = null
console.log(valor)
// console.log(valor.toString()) -> Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar o uso de undefined
console.log(produto)

produto.preco = null
console.log(produto)