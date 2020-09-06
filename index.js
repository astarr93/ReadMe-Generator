const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const welcomeMessage = "Create high-quality ReadMe.md files for your code repositories using a JavaScript CLI consisting of node packages.\n\nPlease provide the following information to receive your file: \n";

let questions = [
    {
        type: "input",
        name: "repoTitle",
        message: "What is the title of your project: "
    },
    {
        type: "input",
        name: "repoDescription",
        message: "Please write a brief description of your project: "
    },
    {
        type: "input",
        name: "repoInstall",
        message: "How do you install your project: "
    },
    {
        type: "input",
        name: "repoUsage",
        message: "How do you use your project: "
    },
    {
        type: "input",
        name: "repoCredits",
        message: "Please provide credit to any contributors as necessary: "
    }
];


figlet('ReadMe Generator', function (err, data) {
    if (err) {
        console.log(welcomeMessage);
    }
    else {
        console.log(`${data}\n${welcomeMessage}`);
    }
    inquirer.prompt(questions).then((answers) => createFile("README.md", answers));
})

function createFile(answers) {
    console.log("PROGRAM END");
}
