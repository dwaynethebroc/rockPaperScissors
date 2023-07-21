/*
Step 1) function getComputerChoice returns Rock, Paper, Scissors

		randomly generate a number between 1-100
		if 1-33 -> rock
		if 34-66 -> paper
		if 67-99 -> scissors 
		if 100 -> re-do random number

		store string value of rock, paper, or scissors, in computerSelection variable  

Step 2) function called playerSelection (User enters an input)
		string text is converted to all lowercase 
		string text, first letter is capitalized
		function makes sure only rock, paper, or scissors is entered
		if anything else, player re-enters input until one of 3 options (rock, paper, scissors) is entered
		store value in variable playerSelection 

Step 3) create function singleRoundRPS 
		
		call playerSelection and computerSelection in singleRoundRPS
		Logic (call variables in print message, not hardcode answers) -> 

		if playerSelection = ‘Rock’ and computerSelection = ‘Scissors’ - print “You win! Rock beats Scissors” 
		if playerSelection = ‘Rock’ and computerSelection = ‘Rock’ - print “You tie! Play another round” 
		if playerSelection = ‘Rock’ and computerSelection = ‘Paper’ - print “You lose! Paper beats Rock” 

		if playerSelection = ‘Scissors’ and computerSelection = ‘Paper’ - print “You win! Scissors beats Paper” 
		if playerSelection = ‘Scissors’ and computerSelection = ‘Scissors’ - print “You tie! Play another round” 
		if playerSelection = ‘Rock’ and computerSelection = ‘Paper’ - print “You lose! Paper beats Rock” 

		if playerSelection = ‘Paper’ and computerSelection = ‘Rock’- print “You win! Paper beats Rock” 
		if playerSelection = ‘Paper’ and computerSelection = ‘Paper’ - print “You tie! Play another round” 
		if playerSelection = ‘Paper’ and computerSelection = ‘Scissors’ - print “You lose! Scissors beats Paper” 


Step 4) call function game() 

		Insert function singleRoundRPS() five times 
*/

let computerSelection; 
let playerSelection;
let winsP = 0;
let tiesP = 0;
let lossesP = 0;

let choiceRock = 'Rock';
let choicePaper = 'Paper';
let choiceScissors = 'Scissors';

let chosenSelectionPlayer = document.getElementById("playerChoice");
let chosenSelectionComputer = document.getElementById("computerChoice");
let roundResult = document.getElementById("roundResult");
let scoreCounter = document.getElementById("scoreCounter");
let winnerResult = document.getElementById("winnerResult");

function getComputerChoice(){

    let randomChoice = Math.floor((Math.random()* 99) + 1);
    console.log(randomChoice);

    if(randomChoice >= 1 && randomChoice <= 33){
        computerSelection = 'Rock';
        console.log(computerSelection); 
    }
    else if (randomChoice >= 34 && randomChoice <= 66){
        computerSelection = 'Paper';
        console.log(computerSelection);
    }
    else if (randomChoice >= 67 && randomChoice <= 99){
        computerSelection = 'Scissors';
        console.log(computerSelection);   
    }
    else {
        getComputerChoice();
    }

    console.log(computerSelection);
    chosenSelectionComputer.innerText = `Computer's Choice: ${computerSelection}`;
    return computerSelection;  
}

function getPlayerChoice(choice){
        let playerSelection = choice;
        console.log(playerSelection);
    
        chosenSelectionPlayer.innerText = `Player's Choice: ${playerSelection}`;
        return playerSelection;  
     
}

function singleRoundRPS(computerSelection, playerSelection){
    computerSelection = getComputerChoice();

    console.log(playerSelection + ' ' + '= player');
    console.log(computerSelection + ' ' + '= computer');

    /* win logic */
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        roundResult.innerText = `You have won: '${playerSelection}' beats '${computerSelection}'`;
        console.log(`winner: player`)
        
        return winsP = winsP + 1; 
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        roundResult.innerText = `You have won: '${playerSelection}' beats '${computerSelection}'`;
        console.log(`winner: player`)
        return winsP = winsP + 1;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        roundResult.innerText = `You have won: '${playerSelection}' beats '${computerSelection}'`;
        console.log(`winner: player`)
        return winsP = winsP + 1;
    }
    
    /* tie logic */
    else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        roundResult.innerText = `You have tied: '${playerSelection}' does not beat '${computerSelection}'`;
        console.log(`winner: nobody`)
        return tiesP = tiesP + 1; 
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        roundResult.innerText = `You have tied: '${playerSelection}' does not beat '${computerSelection}'`;
        console.log(`winner: nobody`)
        return tiesP = tiesP + 1;  
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        roundResult.innerText = `You have tied: '${playerSelection}' does not beat '${computerSelection}'`;
        console.log(`winner: nobody`)
        return tiesP = tiesP + 1;  
    }

    /* lose logic */
    else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        roundResult.innerText = `You have lost: '${computerSelection}' beats '${playerSelection}'`;
        console.log(`winner: computer`)
        return lossesP = lossesP + 1;  
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        roundResult.innerText = `You have lost: '${computerSelection}' beats '${playerSelection}'`;
        console.log(`winner: computer`)
        return lossesP = lossesP + 1;  
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        roundResult.innerText = `You have lost: '${computerSelection}' beats '${playerSelection}'`;
        console.log(`winner: computer`)
        return lossesP = lossesP + 1;  
    }
}

function scoreKeeper() {

    scoreCounter.innerText = `Player's Score: \n \n Wins:  ${winsP} \n Ties: ${tiesP} \n Losses:   ${lossesP} \n \n Computer's Score: \n \n Wins: ${0+lossesP} \n Ties: ${0+tiesP} \n Losses: ${0 + winsP}`;
    
    if(winsP === 5 || lossesP === 5){
        game();
    }

}

function game() {
    
    if(winsP === 5){
        winnerResult.innerText = `YOU HAVE WON!!!`;
        winsP = 0;
        tiesP = 0;
        lossesP = 0;
    }
    else if (lossesP === 5){
        winnerResult.innerText = `YOU HAVE LOST!!!`;
        winsP = 0;
        tiesP = 0;
        lossesP = 0;
    }
}

let rockButton = document.getElementById("rockButton")
rockButton.addEventListener("click", () => {
    getPlayerChoice(choiceRock);
    getComputerChoice();
    singleRoundRPS(undefined, choiceRock);
    scoreKeeper();
});

let paperButton = document.getElementById("paperButton")
paperButton.addEventListener("click", () => {
    getPlayerChoice(choicePaper);
    getComputerChoice();
    singleRoundRPS(undefined, choicePaper);
    scoreKeeper();
});

let scissorsButton = document.getElementById("scissorsButton")
scissorsButton.addEventListener("click", () => {
    getPlayerChoice(choiceScissors);
    getComputerChoice();
    singleRoundRPS(undefined, choiceScissors);
    scoreKeeper();
});






