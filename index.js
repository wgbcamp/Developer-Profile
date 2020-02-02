const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const axios = require('axios');
const generateHTML = require("./generateHTML");
const api = require("./api");
// const username = response

//questions
const questions = [
    {
        type: "input",
        name: "githubname",
        message: "Enter your GitHub username."
    },

    {
        type: "list",
        name: "backgroundcolor",
        message: "Enter your favorite color.",
        choices: ["blue", "purple", "scarlet", "lime", "orange", "yellow"]
    }
  
];


function init() {
   inquirer
        .prompt(questions).then(function (response){
            console.log(response.githubname);
            console.log(response.backgroundcolor);
            var x = response.githubname;
            var y = response.backgroundcolor;
        })
        axios.get()
    }

init();