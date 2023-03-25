import { Person } from "./person";


let persona1 = new Person ("Carlota", 35, "Av. padre piquer 49" );


export class contacts {

          people: any[];

    constructor(){

          this.people = [];

    }

    traerDatos(persona1){
        this.people.push(persona1);
    }

    printCalendar() {

        for( let i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
            
        }
    }

}

// let contact = new contacts();


// contact.traerDatos(persona1);

// contact.printCalendar();

