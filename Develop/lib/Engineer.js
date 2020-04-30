const Employee = require("./Employee.js");



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.role = "Engineer"
    }

    getGithub() {
        console.log(this.github)
        return this.github;
    }

    getRole() {
        return this.role;
    }
}
module.exports = Engineer;
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
