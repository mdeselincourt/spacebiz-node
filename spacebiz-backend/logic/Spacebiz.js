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

export class Division {
    constructor (tonnage,brandname,reliability,value) {
        this.tonnage = tonnage,
        this.brandname = brandname,
        this.reliability = reliability,
        this.value = value
    }
}

export class ShipClass {

    constructor () {
        this.name = "Formidable",
        this.role = "Frigate";
        // 
        
        this.divisions = {
            engines: new Division(252, "AMEC", 1, 250),
            power: new Division(250, "AMEC", 1, 250),
            command: new Division(250, "AMEC", 1, 250),
            habitation: new Division(750, "AMEC", 1, 250),
            fuel: new Division(250, "AMEC", 1, 250),
            ammunition: new Division(250, "AMEC", 1, 250),
            stores: new Division(250, "AMEC", 1, 250),
            weaponry: new Division(250, "AMEC", 1, 250)
        }
       
        // OLDER IMPLEMENTATION FOR RETIREMENT
        this.enginetonnage =  251,
        this.powertonnage =  500,
        this.commandtonnage =  250,
        this.habitationtonnage =  750,
        this.fueltonnage =  250,
        this.ammunitiontonnage =  250,
        this.storestonnage =  250,
        this.weaponrytonnage =  250
        // tonnage (total)
            // role (derived from tonnage)
            // length (derived from tonnage)
            // complement
                // officers
                // coof (CO's OF-)
        
    }

    get tonnage() {
        
        var t = 0;

        // This works
        // for (var divisionKey of Object.keys(this.divisions)){
        //     t += this.divisions[divisionKey].tonnage;
        // }

        for (var divisionKey in this.divisions){
            t += this.divisions[divisionKey].tonnage;
        }

        // for (var division in this.divisions){
        //     t += division.tonnage;
        // }

        return t;
        
        // OLD implementation
        // return Math.round(this.enginetonnage + this.powertonnage + this.commandtonnage + this.habitationtonnage + this.fueltonnage + this.ammunitiontonnage + this.storestonnage + this.weaponrytonnage);
    } 

    reevaluaterole() {
        
        // I don't know a better way to update the data from other reactive changes without causing a stack overflow.
        if (this.tonnage < 1350) { this.role = "Corvette"; }
        else if (this.tonnage < 2500) { this.role = "Frigate"; }
        else if (this.tonnage < 8000) { this.role = "Destroyer"; }
        else if (this.tonnage < 12000) { this.role = "Cruiser"; }
        else { this.role = "Battleship"; }
        
    }

    // set role(r) { // Role is manually editable with machine suggestions
    //     this._role = r; // erm...
    // }

    get length() {
        return Math.round(10 * Math.pow(this.tonnage, 0.33));
    }

    get complement() {
        return Math.round(0.5 * Math.pow(this.tonnage, 0.8))
    }

    get officers() {
        return Math.round(this.complement/20 + 3)
    }

    get coof() {
        return Math.round(Math.pow(this.complement,0.23))
    }

    // If code must be shared but DOESN'T act on the instance you can do this
    //static calculateLength(t) {
    //    return Math.round(10 * (Math.pow(t, 0.33)));
    //}
}