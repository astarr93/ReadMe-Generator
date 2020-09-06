const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const welcomeMessage = "Create high-quality ReadMe.md files for your code repositories using a JavaScript CLI consisting of node packages.\n\nPlease provide the following information to receive your file: \n";

let questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?: "
    },
    {
        type: "input",
        name: "projectAbout",
        message: "How would you describe your project?: "
    },
    {
        type: "input",
        name: "projectInstall",
        message: "How do you install your project?: "
    },
    {
        type: "input",
        name: "projectUsage",
        message: "How do you use your project?: "
    },
    {
        type: "confirm",
        name: "haveProjectMedia",
        message: "Do you have any media (GIFs, JPGs, etc.) of your project to add?: ",
        default: true
    },
    {
        type: "input",
        name: "projectMedia",
        message: "Please select the folder (No subfolders please!) that contains your media: ",
        when: (answers) => answers.haveProjectMedia === true
    },
    {
        type: "confirm",
        name: "haveProjectLicense",
        message: "Do you have any licenses to add to your project?: ",
        default: false
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Please select a license to add to your project: ",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT"
        ],
        when: (answers) => answers.haveProjectLicense === true
    },
    {
        type: "confirm",
        name: "haveProjectCredits",
        message: "Do you have any project contributors to credit?: ",
        default: false
    },
    {
        type: "input",
        name: "projectCredits",
        message: "Please provide any GitHub usernames that contributed to the project: ",
        when: (answers) => answers.haveProjectCredits === true
    },
    {
        type: "confirm",
        name: "haveProjectTests",
        message: "Do you have any testing instructions to prvoide about your project?: ",
        default: false
    },
    {
        type: "input",
        name: "projectTests",
        message: "Please describe any relevant testing instructions for your Project: "
    },
    {
        type: "input",
        name: "Contacts",
        message: "Please provide the GitHub username(s) that will be the point-of-contact for any questions: ",
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
