"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var persona1 = new person_1.Person("Carlota", 35, "Av. padre piquer 49");
persona1.printName();
persona1.yearOfBirth(2023);
persona1.setAddress("Av. americas 49");
persona1.getAddress();
console.log(persona1);
