abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    calculateSalary(): number {
        return 1000000;
    }
}

const job1 = new ParttimeJob(20);
job1.printType();
console.log(`Lương: ${job1.calculateSalary()}`);

const job2 = new FulltimeJob();
job2.printType();
console.log(`Lương: ${job2.calculateSalary()}`);
