class Book{
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getTitle(): string {
        return this.title;
    }       
    getAuthor(): string {
        return this.author;
    }
}
class Library{
    private books: Book[] = [];

    addBook(book: Book): void{
        this.books.push(book);
    }
    viewBooks(): void {
        this.books.forEach(book => {
            console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
        });
    }
}
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let book2 = new Book("1984", "George Orwell");
let book3 = new Book("To Kill a Mockingbird", "Harper Lee");
let book4 = new Book("Pride and Prejudice", "Jane Austen");
let book5 = new Book("The Catcher in the Rye", "J.D. Salinger");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks(); 