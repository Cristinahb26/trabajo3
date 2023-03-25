"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var persona1 = new person_1.Person("Carlota", 35, "Av. padre piquer 49");
var contact = new contacts_1.contacts();
contact.traerDatos(persona1);
contact.printCalendar();
