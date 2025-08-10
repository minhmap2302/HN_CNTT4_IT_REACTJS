class Vehicle {
    name: string;
    year: number;
    company: string;

   constructor(name:string, year:number, company:string) {
        this.name = name;
        this.year = year;
        this.company = company;
   }
    displayInfo(): void{
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
let vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota");
let vehicle2 = new Vehicle("Honda Accord", 2021, "Honda");
vehicle1.displayInfo();
vehicle2.displayInfo();