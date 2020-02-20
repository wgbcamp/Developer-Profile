console.log("running index");

const inquirer = require("inquirer");

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
    .then(async function (response){


       module.exports = {
        username: response.github,
        color: response.color
      };
       require("./api");

       require("./generateHTML");

    })

}
      

inquire();
