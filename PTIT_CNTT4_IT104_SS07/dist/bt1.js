class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log((`Phone: ${this.phone}`));
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
let emp = new Employee("Nguyen Tien Minh", " VinGroup", "0843235568");
emp.printInfo();
let emp2 = new Manager("Nguyen Tien Minh", "Vin", "0843235568", 13);
emp2.printInfo();
