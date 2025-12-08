function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Método acelerar
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método pegar velocidade atual
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(`Velocidade atual: ${uno.getVelocidadeAtual()} km/h`)
uno.acelerar()
console.log(`Velocidade atual: ${uno.getVelocidadeAtual()} km/h`)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(`Velocidade atual: ${ferrari.getVelocidadeAtual()} km/h`)