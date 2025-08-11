var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Year: ").concat(this.year, ", Company: ").concat(this.company));
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Toyota Camry", 2020, "Toyota");
var vehicle2 = new Vehicle("Honda Accord", 2021, "Honda");
vehicle1.displayInfo();
vehicle2.displayInfo();
