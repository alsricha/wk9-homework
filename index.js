const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require ("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        name:"name",
        message:"What is your first and last name?"
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
        message: "What is the intent of your project?"
    },
    {
        type: "checkbox",
        names: "license",
        message: "Choose one of the following license.",
        choices: [
                    "MIT", 
                    "Apache", 
                    "ISC", 
                    "GNU"
                ],
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
        const answers = await promptUser();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("./NewReadme/readMe.md", markDown);

        console.log("Successfully wrote to readMe.md")
    } catch (err) {
        console.log(error)
    }
}

// function call to initialize program
init();




