const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// build subclass details for managers based on provided images
class Intern extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager