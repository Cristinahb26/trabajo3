const person = require("./person");



class Contacts {

    constructor(){

        this.persona1 = [];
    }
    traerPersona(person){
    
        this.persona1.push(person);

    }
    printPersons(){

        console.log(` la altura es ${person.altura} - el peso ${person.peso} - el año de nacimiento es ${person.yearOfBirth} -  hobbies es ${person.hobbies} `);
    
     }
    }




let Contact = new Contacts();

let persona = new person(167, 80, 1988, [' dormir, comer ']);

Contact.traerPersona(persona);
Contact.printPersons();




module.exports = Contacts;




































 
//  class Contacts {

//     constructor(){

//         this.arrayObjeto = [];

//     } 

//     printPersons(){

//         for(let i=0; i < this.arrayObjeto.length; i++){

//             let person = this.arrayObjeto[i];
//             console.log(`mi altura es ${person.altura}  mi peso es ${person.peso}  mi año de nacimiento es ${person.yearOfBirth}`);
//         }

//     }
// }

// let persona2 = new Contacts(); 

// Contacts.arrayObjeto.push(new person(167,80,2000));

// // Contacts.traerPerson(persona1);

// Contacts.printPersons();

