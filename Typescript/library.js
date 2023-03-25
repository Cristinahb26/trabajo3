"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var book_1 = require("./book");
var Book1 = new book_1.Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        return "Book1: \n  ".concat(Book1, " \n ");
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var booksByAuthor = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.getAuthor() === author) {
                booksByAuthor.push(book);
            }
        }
        return booksByAuthor;
    };
    return Library;
}());
exports.Library = Library;
var Librarys = new Library([Book1], "Av. padre piquer", "Luis Mendez");
//   Librarys.setAddress("Av padre piquer");
//   Librarys.getAddress();
//   Librarys.setManager("Luis Mendez");
//   Librarys.getManager();
//   Librarys.findByAuthor("Ariana Godoy")
//   Librarys.toString();
//   console.log(Librarys.toString());
//  console.log(Librarys);
//  console.log(Librarys.getNumberOfBooks());
//  console.log(Librarys.findByAuthor("Ariana Godoy"));
