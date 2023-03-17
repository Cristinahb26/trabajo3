const person = require("./person");




let persona = new person (165, 65);

let Imc = persona.calcularImc()

let Edad = persona.calcularEdad()

         console.log(Imc);

         console.log(Edad);

         persona.printAll();

         persona.printHobbies();

