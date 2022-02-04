let cards = document.querySelector(".container-cards");

let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];

gifs.sort(comparador);

let gifs2 = document.querySelectorAll(".cards");

const cartas = [];

let quantidade;
let flag = false;

while (flag !== true){
    quantidade = prompt("Quantas cartas você deseja?(Somente números pares de 4 a 14)");
    if(quantidade % 2 == 0 && quantidade >=4 && quantidade <= 14){
        flag = true;
    }
}

CriaBaralho(quantidade);

// console.log(quantidade);

function CriaBaralho(elemento){
    for (let i = 0; i < elemento; i++) {
        cards.innerHTML += `
        <div class="card"><img src="front 1.png" alt="imgcard"/></div>`;
    }
    let cards2 = document.querySelectorAll(".card");
    for(let i = 0; i < cards2.length; i++){
        cartas.push(cards2[i]);
    }
    cartas.sort(comparador);
    for(let i = 0; i < cartas.length; i++){
        cards2[i].innerHTML = `
        <div class="card" onclick="selecionarCarta(this)">
        <div class="front face"><img src="front 1.png" alt="imgcard"/> </div>
        <div class="back-face face"><img src="${gifs[i]}"/></div>
        </div>`;
    }
}




function selecionarCarta(elemento){
    let selecionado = document.querySelectorAll(".borda");
    if(selecionado.length >= 2){
        selecionado[0].classList.remove("borda");
        selecionado[1].classList.remove("borda");
    }else{
        elemento.classList.add("borda");
    }
}


function comparador() { 
	return Math.random() - 0.5; 
}