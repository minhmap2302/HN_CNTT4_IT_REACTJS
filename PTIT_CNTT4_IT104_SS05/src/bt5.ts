class Rectangle{
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
let rectangle = new Rectangle(5, 10);
console.log(`Width: ${rectangle.getWidth()}, Height: ${rectangle.getHeight()}`);
console.log(`Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);
rectangle.setWidth(7);
rectangle.setHeight(12);
console.log(`Updated Width: ${rectangle.getWidth()}, Updated Height: ${rectangle.getHeight()}`);
console.log(`Updated Area: ${rectangle.calculateArea()}, Updated Perimeter: ${rectangle.calculatePerimeter()}`);