const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer
.prompt([
    {
        type: "input",
        message: "How many managers are on the team?",
        name: "ManNum",
    
    },
    {
        type: "input",
        message: "How many engineers are on the team?",
        name: "EngNum",
    
    },
    {
        type: "input",
        message: "How many interns are on the team?",
        name: "IntNum",
    
    },
])
.then(async answers =>{
    var manNum = answers.ManNum
    var engNum = answers.EngNum
    var intNum = answers.IntNum

    for (let i = 0; i < manNum; i++) {
        await inquirer
        .prompt([
            {
                type: "input",
                message: "What is the managers name?",
                name: "name",
            
            },
            {
                type: "input",
                message: "What is the managers id?",
                name: "id",
            
            },
            {
                type: "input",
                message: "What is the managers email?",
                name: "email",
            
            },
            {
                type: "input",
                message: "What is the managers office number?",
                name: "officeNum",
            
            },
        ])
        .then(async answers =>{
            var name = answers.name
            var nameCap = name.charAt(0).toUpperCase() + name.slice(1)
            var id = answers.id
            var email = answers.email
            var officeNum = answers.officeNum

            var manager = new Manager(nameCap, id, email, officeNum)

            employeeArray.push(manager)
        })
    }
    for (let i = 0; i < engNum; i++) {
        await inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer name?",
                name: "name",
            
            },
            {
                type: "input",
                message: "What is the engineers id?",
                name: "id",
            
            },
            {
                type: "input",
                message: "What is the engineers email?",
                name: "email",
            
            },
            {
                type: "input",
                message: "What is the engineers github username?",
                name: "github",
            
            },
        ])
        .then(answers =>{
            var name = answers.name
            var nameCap = name.charAt(0).toUpperCase() + name.slice(1)
            var id = answers.id
            var email = answers.email
            var github = answers.github

            var engineer = new Engineer(nameCap, id, email, github)
            
            employeeArray.push(engineer)


        })
    }
    for (let i = 0; i < intNum; i++) {
         await inquirer
        .prompt([
            {
                type: "input",
                message: "What is the interns name?",
                name: "name",
            
            },
            {
                type: "input",
                message: "What is the interns id?",
                name: "id",
            
            },
            {
                type: "input",
                message: "What is the interns email?",
                name: "email",
            
            },
            {
                type: "input",
                message: "What is the name of the interns school?",
                name: "school",
            
            }
        ])
        .then(answers =>{
            var name = answers.name
            var nameCap = name.charAt(0).toUpperCase() + name.slice(1)
            var id = answers.id
            var email = answers.email
            var school = answers.school

            var intern = new Intern(nameCap, id, email, school)

            employeeArray.push(intern)


        })
    }

    render(employeeArray)
    
    fs.writeFile("team.html", render(employeeArray), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

})


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
