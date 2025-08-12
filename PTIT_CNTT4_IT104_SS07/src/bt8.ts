class _Accountt {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp ${amount} vào tài khoản.`);
        } else {
            console.log("Số tiền nạp phải lớn hơn 0.");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} từ tài khoản.`);
        } else {
            console.log("Số dư không đủ.");
        }
    }

    public showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach(h => console.log("-", h));
        console.log(`Số dư hiện tại: ${this.balance}`);
    }
}

class CheckingAccount extends _Accountt {
    public overdraftLimit: number;

    constructor(accountNumber: string, balance: number = 0, overdraftLimit: number = 0) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }

        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút ${amount} từ tài khoản (có thể dùng overdraft).`);
        } else {
            console.log("Vượt quá hạn mức overdraft!");
        }
    }
}

let avingAccount = new CheckingAccount("123456", 1000, 500);

avingAccount.deposit(500);
avingAccount.withdraw(1200);
avingAccount.withdraw(400);
avingAccount.showHistory();
