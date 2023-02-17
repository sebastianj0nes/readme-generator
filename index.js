const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
  
// array of questions for user
const questions = [
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
            message: 'Enter the installation instructions',
            name: 'installation',
        }
    ]).then((response) => {
            console.log(response);
            
        })

];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
