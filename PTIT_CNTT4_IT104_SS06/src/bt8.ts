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
        public status: string
    ) {}
    borrowBook(book: Book): void {
        if (book.stock > 0 && book.status === "available") {
            this.lendedBooks.push(book);
            book.stock--;
            if (book.stock === 0) book.status = "unavailable";
        } else {
            console.log(`Book "${book.title}" is not available.`);
        }
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
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            this.books.forEach(book => console.log(book.toString()));
        }
    }
}

const library = new Library();

const book1 = new Book(1, "Clean Code", "Robert C. Martin", 3, "available");
const book2 = new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 2, "available");
const book3 = new Book(3, "JavaScript: The Good Parts", "Douglas Crockford", 0, "unavailable");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();
