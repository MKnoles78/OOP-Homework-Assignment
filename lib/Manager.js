const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// build subclass details for managers based on provided images
class Intern extends Employees {
    constructor(name, id, email, role, officeNumber){
        super (name, id, email, role);
        this.officeNumber = officeNumber
    }
    getSchool() {
        return this.officeNumber;
    }
}
module.exports = Manager