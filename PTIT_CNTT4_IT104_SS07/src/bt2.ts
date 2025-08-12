class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor (name: string, speed: number, id: number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    
    public slowDown(): void{
        this.speed -= 10;
    }

    public speedDown(): void{ 
        this.speed += 10;
    }

    public showSpeed(): void{
        console.log(`Current speed of ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    
    constructor (name: string, speed: number, id: number, gear: number){
        super(name,id,speed);
        this.gear = gear;
    }

    public showInfo(): void{
        console.log(("Bicycle Information:"));
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}

let myBike = new Vehicle("Than Sam", 1000,1);
myBike.slowDown();
myBike.speedDown();
myBike.slowDown();
myBike.showSpeed();
let myBike1 = new Bicycle("Than Chop",1000,2,3);
myBike1.showInfo();