const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const os = require('os');
const path = require('path');
const questions = require('./questionbank');
const welcomeMessage = "Create high-quality ReadMe.md files for your code repositories using a CLI consisting of node.js packages.\n\nPlease provide the following information to receive your file: \n";

// figlet creates a nice ASCII header to start the CLI
figlet('ReadMe Generator', function (err, data) {
    if (err) {
        // If it fails, skip the ACII art and display a welcome message.
        console.log(welcomeMessage);
    }
    else {
        console.log(`${data}\n${welcomeMessage}`);
    }
    // Inquirer on data for the ReadMe file from the user using questions from questionbank.js
    inquirer.prompt(questions).then(answers => {
        const projectTitle = answers.projectTitle
        const filePath = path.normalize(`${os.homedir}\\downloads\\README-${projectTitle}.txt`);
        fs.writeFile(filePath, "hello world", () => console.log());
    });
});