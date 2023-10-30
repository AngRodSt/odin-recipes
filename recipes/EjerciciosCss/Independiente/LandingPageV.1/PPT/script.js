
//creacion numero aleatorio para la eleccion de la pc
let getComputerChoice = () => {
    let compu = parseInt(Math.random() * 3);
    if (compu == 0) { return "Rock" }
    else if (compu == 1) { return "Paper" }
    else if (compu == 2) { return "Scissors" }
}

pointMe = 0;
pointComputer = 0;

let playRound = (playerSelection) => {
    let computerSelection = getComputerChoice(); 

    if (playerSelection == computerSelection) {
        console.log("Empate")
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        pointMe++;
        console.log("Your puntuation is " + pointMe);
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        pointComputer++;
        console.log("The computer puntuation is " + pointComputer);
    }
    let compuButton = document.querySelector("." + computerSelection);

    if (compuButton) {
        compuButton.classList.add("show");
        setTimeout(() => {
            compuButton.classList.remove("show");
        }, 700);
    }
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




