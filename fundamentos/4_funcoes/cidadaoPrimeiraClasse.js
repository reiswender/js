// Cidadão de primeira linha significa tratar a função como um dado

// Função de forma literal
function fun1() {}

// Armazenar em uma variável - função anônima
const fun2 = function() {}

// Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Falar...'}
console.log(obj.falar())

// Passar uma função como parâmetro de outra
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)