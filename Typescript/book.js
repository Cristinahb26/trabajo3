"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        return "Title - ".concat(this.title, " \n, Numer of Pages - ").concat(this.nPages, " \n, IBN - ").concat(this.isbn, " \n, Author - ").concat(this.author, " \n, Editorial - ").concat(this.editorial, " \n");
    };
    return Book;
}());
exports.Book = Book;
var Book1 = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
// Book1.setTitle("Introduccion a Javascript");
// Book1.getTitle ();
// Book1.setnPages(233);
// Book1.getnPages();
// Book1.setIsbn("2344433-BC23333");
// Book1.getIsbn();
// Book1.setAuthor("Joseph Smith");
// Book1.getAuthor();
// Book1.setEditorial("Now Editions");
// Book1.getEditorial();
// Book1.toString();
// console.log(Book1.toString());
// console.log(Book1);
