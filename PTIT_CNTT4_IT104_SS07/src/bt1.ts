class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor (name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log((`Phone: ${this.phone}`));
    }
}

class Manager extends Employee{
    public teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name,company,phone);
        this.teamSize = teamSize;
    }

    public printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

let emp = new Employee("Nguyen Tien Minh", " VinGroup", "0843235568");
emp.printInfo();
let emp2 = new Manager("Nguyen Tien Minh", "Vin", "0843235568", 13);
emp2.printInfo();