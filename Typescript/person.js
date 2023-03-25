"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
var persona1 = new Person("Carlota", 35, "Av. padre piquer 49");
// persona1.printName();
// persona1.yearOfBirth(2023);
// persona1.setAddress("Av. americas 49");
// persona1.getAddress();
// console.log(persona1.yearOfBirth(2023));
// console.log(persona1.getAddress());
