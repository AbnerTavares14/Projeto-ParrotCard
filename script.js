let cards = document.querySelector(".container-cards");

let gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

let primeiro = null;

let jogadas = 0;

let primeiroSelecionado = null;

let clicavel = true;

let gifsSelecionados = [];

let arrayVerificador = [];

let k = 0;

gifs.sort(comparador);


let gifs2 = document.querySelectorAll(".cards");

let quantidade;
let flag = false;

function iniciaJogo() {
    while (flag !== true) {
        quantidade = prompt("Quantas cartas você deseja?(Somente números pares de 4 a 14)");
        if (quantidade % 2 == 0 && quantidade >= 4 && quantidade <= 14) {
            flag = true;
        }
    }
}

iniciaJogo();

let arrayFlag = new Array(quantidade / 2);

let cartasSelecionadas = [];


CriaBaralho(quantidade);


function CriaBaralho(elemento) {
    let armazenaGif;
    for (let i = 0; i < elemento; i++) {
        cards.innerHTML += `
        <div class="card"><img src="front 1.png" alt="imgcard"/></div>`;
    }
    let cards2 = document.querySelectorAll(".card");
    combinar(cards2.length);
    for (let i = 0; i < cards2.length; i++) {
        cards2[i].innerHTML = `
        <div class="card" onclick="selecionarCarta(this,${i})" data-identifier="card">
        <div class="back-face face" data-identifier="back-face"><img src="front 1.png" alt="imgcard"/> </div>
        <div class="front face" data-identifier="front-face"><img src="${gifsSelecionados[i]}"/></div>
        </div>`;
    }
    cont = setInterval(acrescentaUm, 1000);
}

function acrescentaUm() {
    let div = document.querySelector(".contador");
    div.innerHTML = parseInt(div.innerHTML) + 1;
}

function combinar(numero) {
    for (let i = 0; i < numero / 2; i++) {
        gifsSelecionados.push(gifs[i]);
    }

    for (let j = 0; j < numero; j++) {
        gifsSelecionados.push(gifsSelecionados[j]);
    }
}


function selecionarCarta(elemento, indice) {
    if(clicavel === true){
       jogadas++;
       clicavel = false;
       let tamanho = arrayVerificador.length;
       if (primeiro === null) { 
           primeiro = indice;
           primeiroSelecionado = elemento;
           verificaClick(elemento, 1);
           elemento.classList.add("selecionado");
           clicavel = true;
       } else if (primeiro !== indice) {
           elemento.classList.add("selecionado");
           setTimeout(()=>{
               let gif1 = gifsSelecionados[primeiro];
               let gif2 = gifsSelecionados[indice];
               console.log(gif1 === gif2);
               if(gif1 !== gif2){
                   primeiroSelecionado.classList.remove("selecionado");
                   elemento.classList.remove("selecionado");
                   primeiro = null;
                   primeiroSelecionado = null;
                   clicavel = true;
               }else{
                   clicavel = true;
                   primeiro = null;
                   primeiroSelecionado = null;
                   flagVerificadora();
               }},1000);
       }
   }
}

function verificaClick(elemento, ordem) {
    if (ordem === 1) {
        arrayVerificador.push(elemento);
        return arrayVerificador.length - 1;
    } else {
        arrayVerificador.push(elemento);
        return arrayVerificador.length - 1;
    }
}


function flagVerificadora() {
    arrayFlag[k] = true;
    k++;
    if (k === arrayFlag.length) {
        finalizaJogo();
        return true;
    }
}


function finalizaJogo() {
    let div = document.querySelector(".contador");
    clearInterval(cont);
    alert(`Você ganhou em ${jogadas} rodadas e demorou ${div.innerHTML} segundos para terminar o jogo`);
    let pergunta = prompt("Quer jogar novamente? (s ou n)");
    if (pergunta === "s") {
        window.location.reload();
    }
}

function comparador() {
    return Math.random() - 0.5;
}