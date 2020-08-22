const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require ("./Develop/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

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
        chioces: [
                    "MIT", 
                    "Apache", 
                    "ISC", 
                    "GNU"
                ]
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

// function to initialize program
const init = async () => {
    console.log("Starting Prompts");

    try {
        const answers = await questions();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("./NewReadMe/readMe.md", markDown);

        console.log("Successfully wrote to readMe.md")
    } catch (err) {
        console.log(error)
    }
}

// function call to initialize program
init();




