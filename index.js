// Installation Dependencies
const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const os = require('os');
const path = require('path');
const questions = require('./utils/questionbank');
const generateReadMe = require('./utils/templateReadMe');
const welcomeMessage = "Create high-quality README.md files for your project repositories using a CLI consisting of node.js packages.\n\nPlease provide the following information to make your file: \n";

function init() {
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
            const filePath = path.normalize(`${os.homedir}\\downloads\\README-${answers.projectTitle}.md`);
            fs.writeFile(filePath, generateReadMe(answers), () => console.log(answers));
        });
    });
}

init();