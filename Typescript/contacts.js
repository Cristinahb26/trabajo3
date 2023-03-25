"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contacts = void 0;
var person_1 = require("./person");
var persona1 = new person_1.Person("Carlota", 35, "Av. padre piquer 49");
var contacts = /** @class */ (function () {
    function contacts() {
        this.people = [];
    }
    contacts.prototype.traerDatos = function (persona1) {
        this.people.push(persona1);
    };
    contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    };
    return contacts;
}());
exports.contacts = contacts;
// let contact = new contacts();
// contact.traerDatos(persona1);
// contact.printCalendar();
