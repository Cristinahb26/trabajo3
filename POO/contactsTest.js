
let person = require('./person');
const Contacts = require('./contacts');

let Contacto = new Contacts();

let persona = new person(165, 65, 1988, ['dormir', 'comer' , 'futbol']);


Contacto.traerPersona(persona);
Contacto.printPersons();


