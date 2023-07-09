/* 
1. Deposit into their wallet (check input val is an int/float, NAN, etc.)
2. Ascertain user bet ammount
3. Ascertain user num of lines they bet on 
4. Play game 
5. Update user amounts with winnings or losses
6. Allow user to continue or exit or whether loser falls bellow 0 in account. 


https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/

For .. in --> Gives us access to our obj keys- not values. 
For .. of --> Gives us access to the actual values of our obj


*/

//const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3; 

const SYMBOLS_COUNT = {
    'A' : 2,
    'B' : 4, 
    'C' : 6, 
    'D' : 8,
};

const SYMBOLS_VALUE = {
    'A' : 5,
    'B' : 4, 
    'C' : 3, 
    'D' : 2,
}
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

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt('Please enter how much you would like to bet on this round (Remember your bet is multipled by the number of lines you have selected to bet on): ');
        const numBet = parseFloat(bet);
        
        // Total bet is num of lines * bet ammount, check must divide balance by numOfLines
        if(isNaN(numBet) || numBet <= 0 || numBet > balance / lines){
            console.log('Apologies- It appears your bet may exceed your current balance of ' + balance + '. Please input again. '); 
        } else {
            return numBet;
        }
    }
}

/*
Spin() --> 
    + Convert SYMBOLS_COUNT into an array displaying all possible outcomes. 
    + For each iteration of Spin remove() each symbol from above arr due to it being chosen randomly- therefore, correct randomness applies.
    + Reels [[], [], []] contains our output - nested for loop to populate each entry point. 
    */

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [[], [], []] //Nested arr to display spin output. 
    for (i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        for (j = 0; j < ROWS; j++){
            const randIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randIndex];

            reels[i].push(selectedSymbol); //Add rand selected symbol to inner arr.
            reelSymbols.splice(randIndex, 1); //Update local possible symbols arr by slicing/removing our randomly given index- delete count arg set to 1. 
        }
    }

    return reels;
}



let balance = deposit();
let lines = getNumberOfLines();
let bet = getBet(balance, lines);

console.log('Your deposit ammount is: ' + balance);
console.log('You have chosen to bet: ' + bet + ' on ' + lines + ' Lines. Good Luck');

const reels = spin();
console.log(reels);