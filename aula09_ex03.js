const nome = "Gusttavo Figueredo Costa"

function extrairIniciais(nome) {
    // Divide o nome completo em partes usando espaços
    const partes = nome.split(' ');

    // Mapeia cada parte para a sua inicial e junta com ponto
    const iniciais = partes.map(parte => parte.charAt(0).toUpperCase()).join('.');
    
    // Adiciona o ponto final
    return iniciais + '.';
}

console.log(extrairIniciais(nome));
console.log(extrairIniciais("John Doe"));