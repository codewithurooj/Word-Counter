#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
//Display a welcome message
console.log(chalk.bold.cyanBright("/n/t/tCode with urooj Word Counter!")); 
console.log("=".repeat(60));

//Ask the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence abcd ",
    }
]);
//Triming the sentence and spliting the words based on spaces
    let words = answers.sentence.trim().split(" ");
    //Anylsis of user input sentence
    console.log("=".repeat(60));
    console.log(chalk.bold("-Sentence words:"));
    console.log(words);
    console.log(chalk.bold(`/n - word count:${chalk.bold.redBright(words.length)}`));
