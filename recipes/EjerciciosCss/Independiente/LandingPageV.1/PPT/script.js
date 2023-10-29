let getComputerChoice = ()=>{
    let compu = parseInt(Math.random()*3);
    if(compu==0){return "Paper"}
    else if (compu==1){return "Rock"}
    else if (compu==2) {return "Scissors"}
}
let computerSelection= getComputerChoice();
pointMe=0;
pointComputer=0;
let playRound = (playerSelection, computerSelection)=>{
    if(playerSelection== computerSelection){
        console.log("Empate")
    }
    else if(
        (playerSelection==="Rock" && computerSelection==="Scissors") ||
        (playerSelection==="Paper" && computerSelection==="Rock" )||
        (playerSelection==="Scissors" && computerSelection==="Paper")
    )
        {
            pointMe++;
            console.log("Your puntuation is " + pointMe);
        }
    else if(
        (playerSelection==="Rock" && computerSelection==="Paper")||
        (playerSelection==="Paper" && computerSelection==="Scissors")||
        (playerSelection==="Scissors" && computerSelection==="Rock")
        )
        {
            pointComputer++;
            console.log("The computer puntuation is " + pointComputer);
        }
    
}

let buttonPiedra = document.querySelector(".piedra1");
buttonPiedra.addEventListener('click',playRound("Rock", computerSelection));

let buttonPapel = document.querySelector(".papel1");
buttonPapel.addEventListener('click',playRound("Paper", computerSelection));

let buttonTijera = document.querySelector(".tijera1");
buttonTijera.addEventListener('click',playRound("Scissors", computerSelection));

