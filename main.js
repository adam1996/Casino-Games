/* 
1. Deposit into their wallet (check input val is an int/float, NAN, etc.)
2. Ascertain user bet ammount
3. Ascertain user num of lines they bet on 
4. Play game 
5. Update user amounts with winnings or losses
6. Allow user to continue or exit or whether loser falls bellow 0 in account. 
*/

const prompt = require("prompt-sync")();

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