function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 10.5
    }
}

console.log(criarProduto('note', 50))