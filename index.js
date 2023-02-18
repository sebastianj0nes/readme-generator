const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => 
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of the repository?',
            name: 'repoName',
          },
          {
            type: 'input',
            message: 'Enter a short description of the project',
            name: 'description',
          },
          {
            type: 'input',
            message: 'Enter the installation instructions?',
            name: 'installation',
        },
        {
            type:"input",
            message:"What are the usage requirements?",
            name:"usage"
        },
        {
            type:"input",
            message:"What are the contribution guidelines?",
            name:"contribution"
        },
        {
            type:"input",
            message:"What are the test instructions?",
            name:"testing"
        },
        {
            type:"list",
            message:"What license are you using?",
            name:"license",
            choices: ['MIT', 'Apache','GPU']
        },
        {
            type:"input",
            message:"What is your github profile name?",
            name:"github"
        },
        {
            type:"input",
            message:"What is your email address?",
            name:"email"
        }
    ]);

// function to write README file
function writeToFile(fileName, data) {
    // Using 'fs' library, write to filename with data
    fs.writeFile(fileName, data, function (err) {
        // If there's an error - throw the error
        if (err) throw err;
        // Else console log saved
        console.log(fileName + " has been saved!");
      });
}

// function to initialize program
function init() {
    // Run questions function to get user input
    questions()
    // Then with the returned data, write to a readme file using generate markdown function
    .then((data) => writeToFile('README.md', generateMarkdown(data)))
}

// function call to initialize program
init();
