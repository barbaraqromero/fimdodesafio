const primeiraImagem = document.getElementById('primeiroAvatar');
const segundaImagem = document.getElementById('segundoAvatar');
const terceiraImagem = document.getElementById('terceiroAvatar');
const quartaImagem = document.getElementById('quartoAvatar');

const nome1 = document.getElementById('primeiroNome');
const nome2 = document.getElementById('segundoNome');
const nome3 = document.getElementById('terceiroNome');
const nome4 = document.getElementById('quartoNome');

let maximoDePersonagens = 671;

valorAleatorio = () => {
    return Math.floor(Math.random() * maximoDePersonagens);
}

gerarPrimeiroPersonagem = () => {
    let personagemAleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${personagemAleatorio}`, {
        method: 'GET',
        headers: {
            Accept:'application/json', 
            "Content-Type": 'application/json',
        }
    }).then((response) => response.json()).then((data) => {
        primeiraImagem.src = data.image;  
        nome1.innerHTML = data.name;
    });
}

gerarSegundoPersonagem = () => {
    let personagemAleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${personagemAleatorio}`, {
        method: 'GET',
        headers: {
            Accept:'application/json', 
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        segundaImagem.src = data.image;
        nome2.innerHTML = data.name;   
    });
}

gerarTerceiroPersonagem = () => {
    let personagemAleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${personagemAleatorio}`, {
        method: 'GET',
        headers: {
            Accept:'application/json', 
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        terceiraImagem.src = data.image;   
        nome3.innerHTML = data.name;
    });
}

gerarQuartoPersonagem = () => {
    let personagemAleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${personagemAleatorio}`, {
        method: 'GET',
        headers: {
            Accept:'application/json', 
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        quartaImagem.src = data.image;  
        nome4.innerHTML = data.name; 
    });
}

aleatorizarAoAtualizar = () => {
    gerarPrimeiroPersonagem();
    gerarSegundoPersonagem();
    gerarTerceiroPersonagem();
    gerarQuartoPersonagem();
}

document.onload = aleatorizarAoAtualizar();
