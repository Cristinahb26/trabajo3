export class Book {

    private title: string;
    private nPages: number;
    private isbn: string; 
    private author: string;
    private editorial: string;


    constructor(title:string, nPages: number, isbn: string, author: string, editorial: string){

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;

    }

    setTitle(title: string): void {

        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    setnPages(nPages: number): void {

        this.nPages = nPages;
    }
    
    getnPages(): number {
        return this.nPages;
    }

    setIsbn(isbn: string): void {

        this.isbn = isbn;
    }

    getIsbn(): string {
        return this.isbn;
   
    }

    setAuthor(author: string): void {

        this.author = author;
    }

    getAuthor(): string {
        return this.author;

    }

    setEditorial(editorial: string): void {

        this.editorial = editorial;
    }

    getEditorial(): string {
        return this.editorial;
    }

    toString (): string {

        return `Title - ${this.title} \n, Numer of Pages - ${this.nPages} \n, IBN - ${this.isbn} \n, Author - ${this.author} \n, Editorial - ${this.editorial} \n`;
    }
}

let Book1 = new Book ("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");


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





