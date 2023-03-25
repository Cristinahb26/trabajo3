import { Book } from "./book";
import { Library } from "./library";

let Book1 = new Book ("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");


let Librarys = new Library ([Book1], "Av. padre piquer", "Luis Mendez");



Librarys.setAddress("Av padre piquer");

Librarys.getAddress();

Librarys.setManager("Luis Mendez");

Librarys.getManager();

Librarys.findByAuthor("Ariana Godoy")

Librarys.toString();


console.log(Librarys.toString());

console.log(Librarys);

console.log(Librarys.getNumberOfBooks());

console.log(Librarys.findByAuthor("Ariana Godoy"));