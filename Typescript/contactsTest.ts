import { Person } from "./person";
import { contacts } from "./contacts";


let persona1 = new Person ("Carlota", 35, "Av. padre piquer 49" );

let contact = new contacts();


contact.traerDatos(persona1);

contact.printCalendar();
