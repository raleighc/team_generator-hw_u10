const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const beginningQuestions = [
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "employee",
    choices: ["Manager", "Intern", "Engineer", "I don't have any more team members."],
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "What's your manager's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What's your manager's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What's your manager's E-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "What's your manager's office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "employee",
    choices: ["Manager", "Intern", "Engineer", "I don't have any more team members"],
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What's your intern's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What's your intern's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What's your intern's E-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "What's your intern's school?",
    name: "school",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "employee",
    choices: ["Manager", "Intern", "Engineer", "I don't have any more team members"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What's your engineer's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What's your engineer's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What's your engineer's E-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "What's your engineer's Github username?",
    name: "username",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "employee",
    choices: ["Manager", "Intern", "Engineer", "I don't have any more team members"],
  },
];

const outputArray = [];


function beginning() {
    console.log("Please build your team!");
inquirer.prompt(beginningQuestions)
.then((answers) => {
    if (answers.employee === "Manager"){
    
    } else if (answers.employee === "Intern"){
        
    } else if (answers.employee === "Engineer"){

    } else if (answers.employee === "I don't have any more team members."){
        console.log("Your team is assembled!")
    } 
}).catch((err) => {
    console.log(err)
})
}
beginning();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
