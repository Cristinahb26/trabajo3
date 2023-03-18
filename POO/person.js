class person {
    constructor(altura, peso, yearOfBirth, hobbies){

        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;

    
    }
    calcularImc (){
        let altura = this.altura / 100;
     return this.peso / (altura * altura)

    }
    calcularEdad (){
        let edad = 2023 - this.yearOfBirth;
        return edad

    }
    printAll (){
        console.log(`altura:  ${this.altura} - peso: ${this.peso} - año de nacimiento: ${this.yearOfBirth} - hobbies: ${this.hobbies}`);

    }
    printHobbies(){
        console.log(this.hobbies);
    }

    }



let persona = new person (165, 65, 1988, [`dormir, comer`]);

let Imc = persona.calcularImc()

let Edad = persona.calcularEdad()

//          console.log(Imc);

//          console.log(Edad);

        //  persona.printAll();

//          persona.printHobbies();


// console.log(persona);
 

module.exports = person;