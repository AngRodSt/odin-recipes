let pointMe = 0;
let pointComputer = 0;

do{
    let compu = parseInt(Math.random()*3);
    let getComputerChoice = ()=>
    {
        if(compu==0) {return "Paper"}
        else if (compu==1){return "Rock"}
        else if(compu==2) {return "Scissors"}
    }

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Paper, Rock or Scissors");
    let playRound = (playerSelection,computerSelection)=>
    {
        if(
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
playRound(playerSelection,computerSelection);
} while(pointMe!=5 || pointComputer!=5)

if(pointMe==5){console.log("You win")}
else if(pointComputer==5){console.log("You lose")};