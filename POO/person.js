class person {
    constructor(altura, peso, yearOfBirth, hobbies){

        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;

    
    }
    calcularImc (){
        let altura = this.altura / 100;
     return this.peso / (altura * altura);

    }
    calcularEdad (currentYear){
        return currentYear - this.yearOfBirth

    }
    printAll (){
        console.log(`altura: ${this.altura} - peso: ${this.peso} - año de nacimiento: ${this.yearOfBirth} - hobbies: ${this.hobbies}`);

    }
    printHobbies(){
        console.log(this.hobbies);
    }

    }



let persona = new person (165, 65, 1988, ['comer' , ' dormir ' , 'futbol']);

let Imc = persona.calcularImc();

let currentYear = new Date ().getFullYear();
let Edad = persona.calcularEdad(currentYear);


        //  console.log(Imc);

        //  console.log(Edad);

        //  persona.printAll();

        //  persona.printHobbies();



 

module.exports = person;