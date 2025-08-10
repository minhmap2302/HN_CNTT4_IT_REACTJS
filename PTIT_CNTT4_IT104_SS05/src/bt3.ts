class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
    getCompany(): string {
        return this.company;
    }
    getPhone(): string {
        return this.phone;
    }   
}
let employee = new Employee("John Doe", "Tech Corp", "123-456-7890");
employee.printInfo();          // OK


