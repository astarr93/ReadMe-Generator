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
    // {
    //     type: "confirm",
    //     name: "haveProjectMedia",
    //     message: "Do you have any media (GIFs, JPGs, etc.) of your project to add?: ",
    //     default: false
    // },
    // {
    //     type: "fuzzypath",
    //     name: "projectMediaPath",
    //     message: "Please select the folder that contains your project media: ",
    //     itemType: "directory",
    //     default: "C:/",
    //     when: (answers) => answers.haveProjectMedia === true
    // },
    {
        type: "confirm",
        name: "haveProjectLicense",
        message: "Do you want to add a license to your project?: ",
        default: false
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Please select a license to add to your project: ",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "NO LICENSE"
        ],
        when: (answers) => answers.haveProjectLicense === true
    },
    // {
    //     type: "confirm",
    //     name: "haveProjectCredits",
    //     message: "Do you have any project contributors to credit?: ",
    //     default: false
    // },
    // {
    //     type: "input",
    //     name: "projectCredits",
    //     message: "Please provide any GitHub usernames that contributed to the project: ",
    //     when: (answers) => answers.haveProjectCredits === true
    // },
    // {
    //     type: "confirm",
    //     name: "haveProjectTest",
    //     message: "Do you have any testing instructions to prvoide about your project?: ",
    //     default: false
    // },
    // {
    //     type: "input",
    //     name: "projectTest",
    //     message: "Please describe any relevant testing instructions for your Project: ",
    //     when: (answers) => answers.haveProjectTest === true
    // },
    // // {
    // //     type: "confirm",
    // //     name: "haveProjectTestMedia",
    // //     message: "Do you have any supporting testing media (GIFs, JPGs, etc.) of your project to add?: ",
    // //     default: false,
    // //     when: (answers) => answers.haveProjectTest === true
    // // },
    // // {
    // //     type: "input",
    // //     name: "projectTestMedia",
    // //     message: "Please select the folder that contains your project media: ",
    // //     when: (answers) => answers.haveProjectTestMedia === true
    // // },
    //     {
    //         type: "input",
    //         name: "support",
    //         message: "Please provide the GitHub username(s) responsible for answering any additional questions about your project: ",
    //     }
];

module.exports = questions;