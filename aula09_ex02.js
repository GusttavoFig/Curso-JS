const frase = "Olá, tudo bem?";

function contarPalavras(frase) {
    // Utiliza split() para dividir a frase por espaços
    const palavras = frase.split(/\s+/);
    
    // Retorna o número de palavras, ignorando entradas vazias
    return palavras.filter(palavra => palavra.length > 0).length;
}

const resultado = contarPalavras(frase);
console.log(resultado);  // 3