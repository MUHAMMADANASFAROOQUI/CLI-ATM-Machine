#! /usr/bin/env node
import inquirer from "inquirer";
const mypin = 9308;
let mybalance = 15000;
console.log("Your Current Balance:" + mybalance);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    },
]);
const pinAnswer2 = parseInt(pinAnswer.pin);
if (pinAnswer2 === mypin) {
    console.log("Correct Pin code!!");
    let operationanswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Select the option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    console.log(operationanswer);
    if (operationanswer.operation === "Withdraw") {
        let withdrawanswer = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter your Amount",
                type: "list",
                choices: ["500", "1000", "2000", "5000", "10000"],
            },
        ]);
        switch (parseInt(withdrawanswer.withdraw)) {
            case 500:
                mybalance -= 500;
                console.log(mybalance);
                break;
            case 1000:
                mybalance -= 1000;
                console.log(mybalance);
                break;
            case 2000:
                mybalance -= 2000;
                console.log(mybalance);
                break;
            case 5000:
                mybalance -= 5000;
                console.log(mybalance);
                break;
            case 10000:
                mybalance -= 10000;
                console.log(mybalance);
                break;
        }
    }
    else if (operationanswer.operation === "Check Balance") {
        console.log("Your Current Balance" + mybalance);
    }
}
else {
    console.log("Incorrect Pin code!!");
}
