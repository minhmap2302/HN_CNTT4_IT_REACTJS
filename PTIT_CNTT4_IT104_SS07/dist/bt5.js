class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.passWord = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log("Phương thức login() mặc định từ Account");
    }
    logOut() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Dang xuat thanh cong");
        }
        else {
            console.log("Ban chua dang nhap");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Đăng nhập thành công. Xin chào ${this.userName}!`);
        }
        else {
            console.log("Tai khoan da bi khoa");
        }
    }
}
let acc = new userAcc("001", "Nguyen Tien Minh", "123456", "user", "active");
acc.login();
acc.login();
let accc = new userAcc("002", "Nguyen Viet Nam", "abcdef", "user", "bannerd");
accc.login();
accc.logOut();
