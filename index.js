const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const questions = require('./questionbank');
const welcomeMessage = "Create high-quality ReadMe.md files for your code repositories using a CLI consisting of node.js packages.\n\nPlease provide the following information to receive your file: \n";

figlet('ReadMe Generator', function (err, data) {
    if (err) {
        console.log(welcomeMessage);
    }
    else {
        console.log(`${data}\n${welcomeMessage}`);
    }
    inquirer.prompt(questions).then((answers) => createFile(answers));
})

function createFile(answers) {
    console.log(answers);
}
