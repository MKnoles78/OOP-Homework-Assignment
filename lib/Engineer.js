//pull over information from Employee class 
const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//create sub-class for Engineer information
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole(){
        return this.role
    }
}

module.exports = Engineer