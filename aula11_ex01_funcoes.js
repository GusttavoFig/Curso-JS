function somar(a, b) {
    return a + b;
}

function calcularIMC(peso, altura) {
    let resultado = peso / (altura**2);
    return resultado.toFixed(2);
}

function mensagemBoasVindas() {
    console.log('----------------------------');
    console.log('Bem-vindo ao nosso programa!');
    console.log('----------------------------');
}

module.exports = {somar, calcularIMC, mensagemBoasVindas};