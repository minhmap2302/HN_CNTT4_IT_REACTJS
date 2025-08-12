abstract class Animal{
    public name: string;

    constructor (name: string){
        this.name = name;
    }

    public abstract makeNoise(): void;

    public printName(): void{
        console.log(`Name: ${this.name}`);     
    }
}

class Cat extends Animal{
    public makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal{
    public makeNoise(): void {
        console.log("Toi! Tong Thong Duong Van Minh, tong thong chanh quyen Sai Gon,xin dau hang quan giai phong vo dieu kien");
    }
}

let myCat = new Cat("Mickey");
let myDog = new Dog("Ba Que");

myCat.printName();
myCat.makeNoise();

myDog.printName();
myCat.makeNoise();