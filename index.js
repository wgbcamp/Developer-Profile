console.log("running index");

const inquirer = require("inquirer");

//prompts user for github username and favorite color
 function inquire() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?" 
    },
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ["red", "blue", "green", "pink"]
    }
  ])
  //exports responses and starts api.js
    .then(async function (response){


       module.exports = {
        username: response.github,
        color: response.color
      };
       require("./api");

    })
}
      
inquire();
