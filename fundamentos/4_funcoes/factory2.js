function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.10
    }
}

console.log(criarProduto('Leite', 4.50))