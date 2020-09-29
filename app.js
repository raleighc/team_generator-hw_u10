const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { start } = require("repl");

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
    type: "number",
    message: "What's your manager's office number?",
    name: "officeNumber",
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
];

const outputArray = [];


function managerFunc() {
    inquirer.prompt(managerQuestions)
    .then((answers) =>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        outputArray.push(manager)
        beginningFunc();
    }).catch((err) => {
        console.log(err)
    })
}

function internFunc() {
    inquirer.prompt(internQuestions)
    .then((answers) =>{
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        outputArray.push(intern)
        beginningFunc();
    }).catch((err) => {
        console.log(err)
    })
}

function engineerFunc() {
    inquirer.prompt(engineerQuestions)
    .then((answers) =>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username);
        outputArray.push(engineer)
        beginningFunc();
    }).catch((err) => {
        console.log(err)
    })
}


function startFunc() {
    console.log("Build your team below!");
    beginningFunc();
}

function beginningFunc() {
inquirer.prompt(beginningQuestions)
.then((answers) => {
    if (answers.employee === "Manager"){
        managerFunc();
    } else if (answers.employee === "Intern"){
        internFunc();
    } else if (answers.employee === "Engineer"){
        engineerFunc();
    } else if (answers.employee === "I don't have any more team members."){
        console.log("Your team is assembled!")
        // console.log(outputArray);
        fs.writeFile(outputPath, render(outputArray), function (err) {
            if (err) throw err;
        })
        console.log("Your page is published!")
    } 
}).catch((err) => {
    console.log(err)
})
}
startFunc();


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
