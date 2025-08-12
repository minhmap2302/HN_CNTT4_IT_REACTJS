class Accountt {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nap: +${amount} | So du: ${this.balance}`);
            console.log(`Nap thanh cong: ${amount}. So du hien tai: ${this.balance}`);
        } else {
            console.log("So tien nap phai lon hon 0.");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rut: -${amount} | So du: ${this.balance}`);
            console.log(`Rut thanh cong: ${amount}. So du hien tai: ${this.balance}`);
        } else {
            console.log("So tien rut khong hop le! Vui long thuc hien lai.");
        }
    }

    public showHistory(): void {
        console.log(`Lich su giao dich ${this.accountNumber}:`);
        this.history.forEach(h => console.log(h));
    }
}

class SavingAccount extends Accountt{
    public interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number){
        super(accountNumber,initialBalance);
        this.interestRate = interestRate;
    }

    public override withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            if (this.balance < 0) this.balance = 0;
            this.history.push(`Rut: -${amount} | So du: ${this.balance}`);
            console.log(`Rut thanh cong: ${amount}. So du hien tai: ${this.balance}`);
        } else {
            console.log("So tien rut khong hop le! Vui long thu lai.");
        }
    } 
}

let savingAcc = new SavingAccount("0843235568",5000,0.05);
savingAcc.deposit(10000);
savingAcc.withdraw(30000);
savingAcc.withdraw(30000);
savingAcc.showHistory();


