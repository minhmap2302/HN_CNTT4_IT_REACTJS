class _Account{
    public id: string;
    public userName: string;
    private passWord: string;
    public isLogin: boolean;
    public role: string;

     constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.passWord = password;
        this.isLogin = false;
        this.role = role;
    }

    public login(): void {
        console.log("Phương thức login() mặc định từ Account");
    }

    public logOut(): void{
        if(this.isLogin){
            this.isLogin = false;
            console.log("Dang xuat thanh cong");
        } else {
            console.log("Ban chua dang nhap");
        }
    }
}

class _userAcc extends _Account{
    public status: "active" | "bannerd";
    constructor(id: string, userName: string, password: string, role: string, status: "active" | "bannerd"){
        super(id,userName,password,role);
        this.status = status;
    }

    public override login(): void {
        if (this.status === "active"){
            this.isLogin = true;
            console.log(`Đăng nhập thành công. Xin chào ${this.userName}!`);
        } else {
            console.log("Tai khoan da bi khoa");
        }
    }
}

class userAdmin extends _Account{
    public banUser(user: userAcc){
        user.status = "bannerd";
        console.log(`Tài khoản ${user.userName} đã bị khóa bởi admin.`);
    }
}

const user1 = new userAcc("U001", "Nguyen Van A", "123456", "user", "active");
user1.login();

let admin = new userAdmin("A001", "Admin", "adminpass", "admin");
admin.banUser(user1);
user1.login();
