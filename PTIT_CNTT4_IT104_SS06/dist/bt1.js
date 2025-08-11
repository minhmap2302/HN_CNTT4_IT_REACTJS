class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize() {
        console.log(`Chieu rong: ${this.width}, chieeuf cao: ${this.height}`);
    }
}

let m = new Rectangle("Hinh chu nhat:", 6, 3);
console.log(m.getName());
m.getSize();
