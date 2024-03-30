#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a Number"
    },
]);
if (answers.UserGuessedNumber === RandomNumber) {
    console.log('Number is correct');
}
else {
    console.log("Guessed Number is wrong");
}
