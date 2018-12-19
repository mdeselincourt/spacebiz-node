// A module that is just a literal:
//export default "Hello from Spacebiz.js";

// A module that is a single anonymous function:
// export default function() { 
//      // Can be imported into a vue component and addressed e.g. inside data: or mounted()
//      return "Hello from Spacebiz.js anonymous function";
// }

// A module that is an anonymous object which only contains functions:
// export default { 
//     calculateShipRole() {
//         return "Probably a Frigate"; 
//     },
//}

// A module that is a class containing ES6 static functions
export default class Spacebiz {

    // Here's an example constructor
    // constructor(name, fierce){
    //   this._name = name;
    //   this._fierce = fierce;
    // }
    
    // Here's a static method
    //static calculateShipRole() {
    //    return "Maybe a Frigate?";
    //}
}

export class ShipClass {

    constructor () {
        
        this.name = "Formidable",
        this.enginetonnage =  250,
        this.powertonnage =  500,
        this.commandtonnage =  250,
        this.habitationtonnage =  750,
        this.fueltonnage =  250,
        this.ammunitiontonnage =  250,
        this.storestonnage =  250,
        this.weaponrytonnage =  250
    }

    get tonnage() {
        return this.enginetonnage + this.powertonnage + this.commandtonnage + this.habitationtonnage + this.fueltonnage + this.ammunitiontonnage + this.storestonnage + this.weaponrytonnage;
    } 

    get role() {
        
        if (this.tonnage < 1350) { return "Corvette"; }
        else if (this.tonnage < 2500) { return "Frigate"; }
        else if (this.tonnage < 8000) { return "Destroyer"; }
        else if (this.tonnage < 12000) { return "Cruiser"; }
        else { return "Capital"; }
        
    }

    static calculateLength(tonnage) {
        return Math.round(10 * (tonnage ^ 0.33));
    }
}