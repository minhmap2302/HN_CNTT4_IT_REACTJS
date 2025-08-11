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
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    borrowBook(book) {
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
