const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name:"name",
        message:"What is your full name?"
    },
    {
        type:"input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name: "description",
        message: "Please provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install or run your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for?"
    },
    {
        type: "checkbox",
        names: "license",
        message: "Choose one of the following license.",
        chioces: ["MIT", "Apache", "ISC", "GNU"]
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please describe the testing of the project."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
]);
}


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




