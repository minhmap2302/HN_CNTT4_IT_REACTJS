class Job {
    constructor(type) {
        this.type = type;
    }

    printType() {
        console.log(`Loai cong viec: ${this.type}`);
    }
}

class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    caculateSalary() {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    caculateSalary() {
        return 1000000;
    }
}

let partime = new ParttimeJob(100);
let fultime = new FulltimeJob();

partime.printType();
console.log(`Luong: ${partime.caculateSalary()} VND`);

fultime.printType();
console.log(`Luong: ${fultime.caculateSalary()} VND`);
