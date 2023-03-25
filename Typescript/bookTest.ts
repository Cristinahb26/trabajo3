import { Book } from "./book"


let Book1 = new Book ("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");


Book1.setTitle("Introduccion a Javascript");
Book1.getTitle ();

Book1.setnPages(233);
Book1.getnPages();

Book1.setIsbn("2344433-BC23333");
Book1.getIsbn();

Book1.setAuthor("Joseph Smith");
Book1.getAuthor();

Book1.setEditorial("Now Editions");
Book1.getEditorial();

Book1.toString();

console.log(Book1.getTitle());
console.log(Book1.getnPages());
console.log(Book1.getIsbn());
console.log(Book1.getAuthor());
console.log(Book1.getEditorial());

console.log(Book1.toString());

console.log(Book1);
