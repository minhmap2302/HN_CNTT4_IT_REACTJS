abstract class Shape {
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize():void;
}
class Rectangle1 extends Shape {
    private height: number;
    private width: number;

    constructor(name:string,width:number,height:number){
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Chieu rong: ${this.width}, chieeuf cao: ${this.height}`);
    }
}

let m = new Rectangle1("Hinh chu nhat:",6,3);
console.log(m.getName());
m.getSize();
