// Viết 1 hàm tạo một đối tượng người dùng với name, age và role
// Hàm này có thể nhận tối đa 3 đối số là name , age , role .  
// name : Tên người dùng .
// age: Tuổi .
// role : Vai trò của người dùng .
// Nếu hàm không truyền vào giá trị cho age hoặc role thì mặc định age = 18 và role = “user”
// Sử dụng Default Parameter 
const createUser = (name, age = 18, role = "user") => {
    return {
        name,
        age,
        role
    };
}

const user1 = createUser("Alice");
const user2 = createUser("Bob", 25, "admin");
console.log(user1);
console.log(user2);