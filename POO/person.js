class person {
    constructor(altura, peso){

        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = 1988;
        this.hobbies = ["dormir, leer"];

        // this.datosCompletos = this.altura + " " + this.peso + " " + (2023-this.yearOfBirth) + " " + this.hobbies
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
        console.log(this);

    }
    printHobbies(){
        console.log(this.hobbies);
    }

    }



// let persona = new person (165, 65);

// let Imc = persona.calcularImc()

// let Edad = persona.calcularEdad()

//          console.log(Imc);

//          console.log(Edad);

//          persona.printAll();

//          persona.printHobbies();
 

module.exports = person;