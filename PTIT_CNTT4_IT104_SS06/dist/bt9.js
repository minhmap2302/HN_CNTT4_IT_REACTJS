class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    toString() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`;
    }
}

class Member {
    constructor(id, name, contact, status = "active") {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Contact: ${this.contact}, Status: ${this.status}`;
    }
}

class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach(book => console.log(book.toString()));
    }

    registerMember(id, name, contact) {
        const member = new Member(id, name, contact);
        this.members.push(member);
    }

    blockMember(memberId) {
        const member = this.members.find(m => m.id === memberId);
        if (member) {
            member.status = (member.status === "active") ? "blocked" : "active";
        }
    }

    showMembers() {
        if (this.members.length === 0) {
            console.log("No members in the library.");
        } else {
            this.members.forEach(m => console.log(m.toString()));
        }
    }
}

const library = new Library();

// Thêm sách
library.addBook(new Book(1, "Clean Code", "Robert C. Martin", 3, "available"));
library.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 2, "available"));

// Đăng ký thành viên
library.registerMember(1, "Nguyen Van A", "a@example.com");
library.registerMember(2, "Tran Thi B", "b@example.com");

// Hiển thị thành viên
console.log("Danh sách thành viên:");
library.showMembers();

// Khóa thành viên
library.blockMember(1);

// Hiển thị lại sau khi thay đổi trạng thái
console.log("\nSau khi thay đổi trạng thái:");
library.showMembers();
