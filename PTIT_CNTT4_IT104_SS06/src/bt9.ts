class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string
    ) {}
    toString(): string {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`;
    }
}

class Member {
    public lendedBooks: Book[] = [];
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public status: string = "active"
    ) {}
    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}, Contact: ${this.contact}, Status: ${this.status}`;
    }
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        this.books.forEach(book => console.log(book.toString()));
    }

    registerMember(id: number, name: string, contact: string): void {
        const member = new Member(id, name, contact);
        this.members.push(member);
    }

    blockMember(memberId: number): void {
        const member = this.members.find(m => m.id === memberId);
        if (member) {
            member.status = (member.status === "active") ? "blocked" : "active";
        }
    }

    showMembers(): void {
        if (this.members.length === 0) {
            console.log("No members in the library.");
        } else {
            this.members.forEach(m => console.log(m.toString()));
        }
    }
}

const library = new Library();

library.addBook(new Book(1, "Clean Code", "Robert C. Martin", 3, "available"));
library.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 2, "available"));

library.registerMember(1, "Nguyen Van A", "a@example.com");
library.registerMember(2, "Tran Thi B", "b@example.com");

console.log("Danh sách thành viên:");
library.showMembers();

library.blockMember(1);

console.log("\nSau khi thay đổi trạng thái:");
library.showMembers();
