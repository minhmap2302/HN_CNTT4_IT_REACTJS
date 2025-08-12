class _Account {
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
class _userAcc extends _Account {
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
class userAdmin extends _Account {
    banUser(user) {
        user.status = "bannerd";
        console.log(`Tài khoản ${user.userName} đã bị khóa bởi admin.`);
    }
}
const user1 = new userAcc("U001", "Nguyen Van A", "123456", "user", "active");
user1.login();
let admin = new userAdmin("A001", "Admin", "adminpass", "admin");
admin.banUser(user1);
user1.login();
