/* 
1. Deposit into their wallet (check input val is an int/float, NAN, etc.)
2. Ascertain user bet ammount
3. Ascertain user num of lines they bet on 
4. Play game 
5. Update user amounts with winnings or losses
6. Allow user to continue or exit or whether loser falls bellow 0 in account. 
*/

//const prompt = require("prompt-sync")();
console.log('TEST')

const deposit = () => {
    while(true){
        const depositAmmount = prompt('Please enter your initial deposit ammount: ')
        const startingAmmount = parseFloat(depositAmmount);
        if (isNaN(startingAmmount) || startingAmmount <= 0){
            console.log('Your inputted deposit is either, not a number or is a negative value- please input again: ')
        } else {
            return startingAmmount
        }
    }
}

const getNumberOfLines = () => {
    while(true){
        const lines = prompt('How many lines would you like to bet on (1 - 3): ');
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log('Sorry - you did not enter a number between 1 and 3. Please try again: ')
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance) => {
    while(true){
        const bet = prompt('Please enter how much you would like to bet on this round: ');
        const numBet = parseFloat(bet);

        if(isNaN(numBet) || numBet <= 0 || numBet > balance){
            console.log('Apologies- It appears your bet may exceed your current balance of ' + balance + '. Please input again. '); 
        } else {
            return numBet;
        }
    }
}

let depositAmmount = deposit();
let lines = getNumberOfLines();
let bet = getBet();

console.log('Your deposit ammount is: ' + depositAmmount);
console.log('You have chosen to bet: ' + bet + ' on ' + lines + ' Lines. Good Luck');