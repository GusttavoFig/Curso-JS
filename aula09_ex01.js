const frase = "Eu gosto de JavaScript";
const palavra = "JavaScript";
const novaPalavra = "Python";

const stringExemplo = "Curso de Javascript ";

function substituirPalavra (a, b, c) {
    console.log(a.replace(b, c));
}

substituirPalavra(frase, palavra, novaPalavra);

substituirPalavra(frase, palavra, "dormir");

substituirPalavra("Eu não gosto de JavaScript", palavra, novaPalavra);

substituirPalavra(frase, "gosto", novaPalavra);
