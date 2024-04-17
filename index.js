#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 100000; // dollors
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
// conditions
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select operation",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash", "transfer", "pay bill"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        // =, -=, +=
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance. Transaction cannot be completed.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your current balance is " + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "list",
                choices: ["1000", "5000", "10000", "20000", "50000"]
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your current balance is " + myBalance);
    }
    else if (operationAns.operation === "transfer") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your current balance is " + myBalance);
        console.log("congrations your money is transfered");
    }
    else if (operationAns.operation === "pay bill") {
        let amountAns = await inquirer.prompt([
            {
                name: "bill",
                message: "select your bill",
                type: "list",
                choices: ["electricity", "gass", "internet"]
            },
            {
                name: "amount",
                message: "select your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your current balance is " + myBalance);
        console.log("congrations your bill is paid");
    }
}
else {
    console.log("please inter valid pin");
}
