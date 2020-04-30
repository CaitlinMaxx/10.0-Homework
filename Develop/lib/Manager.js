const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
        this.role = "Manager"
    }
    getOffice() {
        return this.officeNum
    }
    getRole() {
        return this.role
    };
}
module.exports = Manager;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
