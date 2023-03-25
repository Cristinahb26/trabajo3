export class Person {

              name: string;
              age: number;
      private address: string;


      constructor(name:string, age:number, address:string){

             this.name = name;
             this.age = age;
             this.address = address;
      }

  printName(): void {
    console.log(this.name);
      
  }

  yearOfBirth(currentYear: number): number {
    return currentYear - this.age;
     
  }

  setAddress(address: string): void {
        this.address = address;

  }

  getAddress():string {
    return this.address;

  }

}

let persona1 = new Person ("Carlota", 35, "Av. padre piquer 49" );

// persona1.printName();

// persona1.yearOfBirth(2023);

// persona1.setAddress("Av. americas 49");

// persona1.getAddress();

// console.log(persona1.yearOfBirth(2023));

// console.log(persona1.getAddress());







