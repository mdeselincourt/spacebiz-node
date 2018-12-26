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
//export default class Spacebiz {

    // Here's an example constructor
    // constructor(name, fierce){
    //   this._name = name;
    //   this._fierce = fierce;
    // }
    
    // Here's a static method
    //static calculateShipRole() {
    //    return "Maybe a Frigate?";
    //}

//}

export const SpacebizConsts = {
    gametext: {
        tooltips: {
            manufacturers: `AMEC: industry standard parts.
                Primarch: Cheap products for cost-saving.
                YORK: powerful but unreliable. `,
            reliability: `A relative factor, where industry standard is (1.0). 
Perfect reliability cannot be achieved.`
        }
    } 
}

export class Mod {

    constructor (name, performancePc, reliabilityPc, pricinessPc) {
        this.name = name;
        this.performancePc = performancePc;
        this.reliabilityPc = reliabilityPc;
        this.pricinessPc = pricinessPc;
    }

}

export class Division {
    constructor (tonnage) {
        this.tonnage = tonnage,

        // Let's attempt a convention where mods[0] is ALWAYS manufacturer (and mods[1] is always shipyard)?
        this.mods = [
            new Mod("AMEC static debug", 101,102,103),
            new Mod("Kuat Drive Yards static debug",104,105,106)
        ]
    }

    get brandname() { return this.mods[0].name; }
    get performancePc() { var r = 100; this.mods.forEach((e) => {r = r * (e.performancePc / 100)}); return Math.round(r); }
    get reliabilityPc() { var r = 100; this.mods.forEach((e) => {r = r * (e.reliabilityPc / 100)}); return Math.round(r); }
    get pricinessPc() { var r = 100; this.mods.forEach((e) => {r = r * (e.pricinessPc / 100)}); return Math.round(r); }
    get value() { return Math.round(this.tonnage * this.pricinessPc / 100) }

}

export class ShipClass {

    constructor () {
        this.name = "Battle";
        this.role = "";
        // 
        

        var constructorDivisionTypes = ["e-warfare", "engines", "sensors", "weaponry"];

        this.divisions = {}

        // Autoloading 
        for (var newDiv of constructorDivisionTypes) {
            this.divisions[newDiv] = new Division(250, "AMEC", 1.0, 250);
        }

        // this.divisions = {
        //     engines: new Division(252, "AMEC", 1, 250),
        //     power: new Division(250, "AMEC", 1, 250),
        //     command: new Division(250, "AMEC", 1, 250),
        //     habitation: new Division(750, "AMEC", 1, 250),
        //     fuel: new Division(250, "AMEC", 1, 250),
        //     ammunition: new Division(250, "AMEC", 1, 250),
        //     stores: new Division(250, "AMEC", 1, 250),
        //     weaponry: new Division(250, "AMEC", 1, 250)
        // };
       
        // OLDER IMPLEMENTATION FOR RETIREMENT
        // this.enginetonnage =  251,
        // this.powertonnage =  500,
        // this.commandtonnage =  250,
        // this.habitationtonnage =  750,
        // this.fueltonnage =  250,
        // this.ammunitiontonnage =  250,
        // this.storestonnage =  250,
        // this.weaponrytonnage =  250
        // tonnage (total)
        // role (derived from tonnage)
        // length (derived from tonnage)
        // complement
        // officers
        // coof (CO's OF-)
        
        // Update anything that has intentionally been left needing active updates
        this.reevaluaterole();
    }

    get value() {
        var x = 0;
        for (var divisionKey of Object.keys(this.divisions)){
            x += this.divisions[divisionKey].value;
        }
        return x;
    }

    get designValue() {
        return Math.round(this.value / 10);
    }

    get tonnage() {
        
        var x = 0;

        // This works
        for (var divisionKey of Object.keys(this.divisions)){
            x += this.divisions[divisionKey].tonnage;
        }

        // for (var divisionKey in this.divisions){
        //     t += this.divisions[divisionKey].tonnage;
        // }

        // for (var division in this.divisions){
        //     t += division.tonnage;
        // }

        return x;
        
        // OLD implementation
        // return Math.round(this.enginetonnage + this.powertonnage + this.commandtonnage + this.habitationtonnage + this.fueltonnage + this.ammunitiontonnage + this.storestonnage + this.weaponrytonnage);
    } 

    reevaluaterole() {
        
        // I don't know a better way to update the data from other reactive changes without causing a stack overflow.
        if (this.tonnage < 1350) { this.role = "Corvette"; }
        else if (this.tonnage < 2500) { this.role = "Frigate"; }
        else if (this.tonnage < 7000) { this.role = "Destroyer"; }
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

    get co() {
        return ["Cadet", "Sub-lieutenant", "Lieutenant", "Lieutenant commander", "Commander", "Captain", "Commodore", "Rear admiral"][this.coof];
    }

    get asciiArt() {

        var rows  = [];
        rows[0] = " /█";
        rows[1] = " L█";

        var l = Math.min(Math.max(this.length, 50),400); 

        for (var i = Math.round(l - 40) / 10; i > 0; i--) {
            rows[0] += "█";
            rows[1] += "█";
        }

        rows[0] += "█< =-";
        rows[1] += "█< =-";

        return rows[0] + "\n" + rows[1];
    }

    // If code must be shared but DOESN'T act on the instance you can do this
    //static calculateLength(t) {
    //    return Math.round(10 * (Math.pow(t, 0.33)));
    //}
}