class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 10;
    }
    speedDown() {
        this.speed += 10;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name}: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, id, speed);
        this.gear = gear;
    }
    showInfo() {
        console.log(("Bicycle Information:"));
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}
let myBike = new Vehicle("Than Sam", 1000, 1);
myBike.slowDown();
myBike.speedDown();
myBike.slowDown();
myBike.showSpeed();
let myBike1 = new Bicycle("Than Chop", 1000, 2, 3);
myBike1.showInfo();
