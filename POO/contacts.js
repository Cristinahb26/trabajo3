const person = require("./person");



class Contacts {

    constructor(){

        this.persona1 = [];
    }
    traerPersona(person){
    
        this.persona1.push(person);
    }

    printPersons(){
     for(let i = 0; i < this.persona1.length; i++){
        console.log(`altura ${this.persona1[i].altura} - mi peso ${this.persona1[i].peso} - año de nacimiento ${this.persona1[i].yearOfBirth} - hobbies ${this.persona1[i].hobbies}`);
     }

      }
     }
    


// let Contacto = new Contacts();

// let persona = new person (165, 65, 1988, ['dormir', 'comer', 'futbol']);

// Contacto.traerPersona(persona);

// Contacto.printPersons();

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

