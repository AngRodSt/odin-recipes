//Creacion de elementos en el dom para los mensajes
let table = document.querySelector(".table");
let title = document.createElement("h1");
title.textContent="Here We Go!!"
table.appendChild(title);
let textTable = document.createElement("span");
table.appendChild(textTable)
let restart = document.createElement("button");



//creacion numero aleatorio para la eleccion de la pc
let getComputerChoice = () => {
    let compu = parseInt(Math.random() * 3);
    if (compu == 0) { return "Rock" }
    else if (compu == 1) { return "Paper" }
    else if (compu == 2) { return "Scissors" }
}

pointMe = 0;
pointComputer = 0;
let round = 1;
//Funcion General que se ejecutara al presionar un boton
let playRound = (playerSelection) => {
    title.textContent="Round "+ round;
    let computerSelection = getComputerChoice(); 

//Condicional o logica del juego
    if (playerSelection == computerSelection) {
        textTable.textContent="Well.. you have the same choses, keep trying! ";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        pointMe++;
        textTable.textContent="Awesome!! you have one more point! your punctuation is " + pointMe;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        pointComputer++;
        textTable.textContent="Uff!! The computer have one more point! his punctuation is " + pointComputer;
    }
    //Iluminacion del boton de la computadora automaticamente, y se desactiva con un tiempo indicado
    let compuButton = document.querySelector("." + computerSelection);

    if (compuButton) {
        compuButton.classList.add("show");
        setTimeout(() => {
            compuButton.classList.remove("show");
        }, 700);
    }

    //Condicional sobre las rondas emitidas, a los 5 puntos ganas
    if(pointMe==5 || pointComputer==5){
        title.textContent="GAME OVER"
        if(pointMe==5){
            textTable.textContent="YOU WIN!! ";
        }
        else if(pointComputer==5){
            textTable.textContent="YOU LOSE.. KEEP TRYING";
        }
        restart.textContent="Start Again...";
        table.appendChild(restart);
        restart.addEventListener('click',()=>{location.reload()})
    }
    round++
}

let buttonPiedra = document.querySelector(".piedra1");
buttonPiedra.addEventListener('click', () => {
    playRound("Rock");
});

let buttonPapel = document.querySelector(".papel1");
buttonPapel.addEventListener('click', () => {
    playRound("Paper");
});

let buttonTijera = document.querySelector(".tijera1");
buttonTijera.addEventListener('click', () => {
    playRound("Scissors");
});






