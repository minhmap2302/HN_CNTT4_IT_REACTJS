class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
            console.log(`Nạp thành công: ${amount}. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Số tiền nạp phải lớn hơn 0.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
            console.log(`Rút thành công: ${amount}. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Số tiền rút không hợp lệ hoặc không đủ số dư.");
        }
    }
    showHistory() {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach(h => console.log(h));
    }
}
