const questions = [
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
            "ISC",
            "MIT",
        ],
        when: (answers) => answers.haveProjectLicense === true
    },
    {
        type: "confirm",
        name: "haveContributors",
        message: "Is your project accepting contributors?: ",
        default: false
    },
    {
        type: "input",
        name: "projectTest",
        message: "Please provide any testing instructions about your project?: ",
    },
    // {
    //     type: "confirm",
    //     name: "haveProjectTestMedia",
    //     message: "Do you have any supporting testing media (GIFs, JPGs, etc.) of your project to add?: ",
    //     default: false,
    //     when: (answers) => answers.haveProjectTest === true
    // },
    // {
    //     type: "input",
    //     name: "projectTestMedia",
    //     message: "Please select the folder that contains your project media: ",
    //     when: (answers) => answers.haveProjectTestMedia === true
    // },
    {
        type: "input",
        name: "support",
        message: "Please provide an initial GitHub username responsible for answering any additional questions about your project: ",
    }
];

module.exports = questions;