const person = require("./person");




let persona = new person (165, 65, 1988, [` dormir, comer`]);

let Imc = persona.calcularImc()

let Edad = persona.calcularEdad()

         console.log(Imc);

         console.log(Edad);

         persona.printAll();

         persona.printHobbies();

