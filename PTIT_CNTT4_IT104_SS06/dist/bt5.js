class Vehicle {
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }

    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    stop() {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

let car = new Vehicle();

car.speedUp(40);
car.speedUp(30);
car.slowDown(20);
car.slowDown(10);
car.stop();
