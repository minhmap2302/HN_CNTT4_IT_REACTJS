class Account{
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

class userAcc extends Account{
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

let acc = new userAcc("001","Nguyen Tien Minh","123456","user","active");
acc.login();
acc.login();

let accc = new userAcc("002","Nguyen Viet Nam","abcdef","user","bannerd");
accc.login();
accc.logOut();