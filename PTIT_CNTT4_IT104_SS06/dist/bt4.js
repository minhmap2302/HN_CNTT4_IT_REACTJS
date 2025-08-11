class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectanglee {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);
console.log("Hình tròn:");
console.log("Diện tích:", circle.calculateArea().toFixed(2));
console.log("Chu vi:", circle.calculatePerimeter().toFixed(2));
const rectangle = new Rectanglee(4, 6);
console.log("\nHình chữ nhật:");
console.log("Diện tích:", rectangle.calculateArea());
console.log("Chu vi:", rectangle.calculatePerimeter());
