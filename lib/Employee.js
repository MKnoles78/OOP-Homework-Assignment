class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
    
}
// TODO: Write code to define and export the Employee class
//built class based on common information of name, ids, and emails.
//would need to pull in this class to the other folders and create subclass to add remainder of info

module.exports = Employee