import { Book } from "./book";

let Book1 = new Book ("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

export class Library {

    private books: Book[];
    private address: string;
    private manager: string;


    constructor(books: Book[], address: string, manager: string) {

        this.books = books;
        this.address = address;
        this.manager = manager;
        
    }

    setAddress(address: string): void {

        this.address = address;

    }

    getAddress(): string{
        return this.address;
    }

    setManager(manager: string): void{

        this.manager = manager;
    }

    getManager(): string {
        return this.manager;

    }

    toString(): string {
        return    `Book1: \n  ${Book1} \n `;
    }

    getNumberOfBooks(): number {
    
         return this.books.length;
    }
    
    findByAuthor(author: string): Book[]  {

        let booksByAuthor: Book[] = [];

        for (let book of this.books) {  

            if (book.getAuthor() === author) {  
                booksByAuthor.push(book);  

            }  

        }  

        return booksByAuthor;
        }
    }



  let Librarys = new Library ([Book1], "Av. padre piquer", "Luis Mendez");



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
 

  



