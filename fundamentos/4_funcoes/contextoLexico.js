const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

// O contexto léxico carrega o DNA da função considerando o ambiente em que ela foi criada
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()