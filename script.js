const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        console.log('There is an error.');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';        
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Computer won!';
        } else {
           return 'User won!';
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log("Your choice is: " + userChoice);
    console.log("The computer choice is: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();