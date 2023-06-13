let computerSelection; 
let playerSelection;
let wins = 0;
let ties = 0;
let losses = 0;

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

    console.log(computerSelection);
    return computerSelection;  
}

function getPlayerChoice(){
     let str1 = prompt("please enter an option between 'Rock', 'Paper', and 'Scissors'", '');
     console.log(str1);

     let str2 = str1.toLowerCase();
     console.log(str2);

    if(str2 === 'rock' || str2 === 'paper' || str2 === 'scissors'){
        let str3 = str2.charAt(0);
        
        let firstLetter = str3.toUpperCase();
        console.log(firstLetter);
   
        let remainingLetters = str2.substring(1);
        console.log(remainingLetters);
   
        playerSelection = firstLetter + remainingLetters; 
        console.log(playerSelection);
   
        window.alert(`You have entered '${playerSelection}'`); 
        return playerSelection;  
     }
    else (
        getPlayerChoice()
    ) 
}


function singleRoundRPS(computerSelection, playerSelection){
    playerSelection = getComputerChoice();
    computerSelection = getPlayerChoice();

    console.log(playerSelection + ' ' + '= player');
    console.log(computerSelection + ' ' + 'computer');

    /* win logic */
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have won -> '${playerSelection}' beats '${computerSelection}'`);
        return wins = wins + 1; 
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have won -> '${playerSelection}' beats '${computerSelection}'`); 
        return wins = wins + 1;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have won -> '${playerSelection}' beats '${computerSelection}'`); 
        return wins = wins + 1;
    }
    
    /* tie logic */
    else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have tied -> '${playerSelection}' does not beat '${computerSelection}'`);
        return ties = ties + 1; 
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have tied -> '${playerSelection}' does not beat '${computerSelection}'`);
        return ties = ties + 1;  
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have tied -> '${playerSelection}' does not beat '${computerSelection}'`);
        return ties = ties + 1;  
    }

    /* lose logic */
    else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have lost -> '${computerSelection}' beats '${playerSelection}'`);
        return losses = losses + 1;  
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have lost -> '${computerSelection}' beats '${playerSelection}'`);
        return losses = losses + 1;  
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        window.alert(`You have selected '${playerSelection}' -> the computer has chosen '${computerSelection}'\n \n You have lost -> '${computerSelection}' beats '${playerSelection}'`);
        return losses = losses + 1;  
    }
}

function game() {
    singleRoundRPS(); 
    singleRoundRPS(); 
    singleRoundRPS(); 
    singleRoundRPS(); 
    singleRoundRPS(); 
    
    window.alert(`You won ${wins} games \n Tied ${ties} games \n Lost ${losses} games`)
}

game();


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

Step 3) run function singleRoundRPS 
		
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
