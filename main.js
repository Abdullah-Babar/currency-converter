#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    SR: 3.75,
    INR: 74.57,
    PKR: 278
};
console.log("\n Welcome! to my Currency Coverter Machine \n");
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter Your From Currency",
        choices: ['USD', 'EUR', 'SR', 'INR', 'PKR']
    },
    {
        name: "to",
        type: "list",
        message: "Enter Your To Currency",
        choices: ['USD', 'EUR', 'SR', 'INR', 'PKR']
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
let userFromCurrency = userAnswer.from;
let userToCurrency = userAnswer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log("\nThanks! for using my machine ");
