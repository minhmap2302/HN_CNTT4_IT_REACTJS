class Vehicle{
    readonly id: number;
    public name: string;
    protected year: number;
    private company: string;
    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
    getYear(): number{
        return this.year;
    }
    getCompany(): string {
        return this.company;
    }
}
let vehicle = new Vehicle(1, "Toyota", 2020, "Toyota Motor Corporation");
vehicle.displayInfo();  // In ra thông tin của xe