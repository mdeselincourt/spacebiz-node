<template>
	<div id="classdesigner">
		<form @submit.prevent="handleSubmit"><!-- capture and override "normal" form behaviour -->
			<h1>Class Designer</h1>
			<p>
				<label for="classname">Name:</label>
				<input id="classname" v-model="shipclass.name" value="">
				<input id="classrole" v-model="shipclass.role" value="">		
			</p>
	
			<ul>
				<li><input id="enginetonnage" v-model.number="shipclass.enginetonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="20"/> t Engines</li>
				<li><input id="powertonnage" v-model.number="shipclass.powertonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Power</li>
				<li><input id="commandtonnage" v-model.number="shipclass.commandtonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Command</li>
				<li><input id="habitationtonnage" v-model.number="shipclass.habitationtonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Habitation</li>
				<li><input id="fueltonnage" v-model.number="shipclass.fueltonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Fuel</li>
				<li><input id="ammunitiontonnage" v-model.number="shipclass.ammunitiontonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Ammunition</li>
				<li><input id="storestonnage" v-model.number="shipclass.storestonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Stores</li>
				<li><input id="weaponrytonnage" v-model.number="shipclass.weaponrytonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" SIZE="10"/> t Weaponry</li>
			</ul>
		
			<ul>
					<li>Total tonnage: {{ totaltonnage }} t</li>
					<li>Length: {{ length }} m</li>
					<li>Crew: {{ crew }}</li>
					<li>of which Officers: {{ officers }}</li>

			</ul>
			<input type="submit"/>  
		</form>
	</div>
</template>

<script>
	// Import libraries
	// import axios from 'axios'; // For HTTP!
	// import json from 'json'; // For strinfigying for debugging/logging
	
	import Spacebiz from '../../../spacebiz-backend/logic/Spacebiz.js'; // HERE'S HOW I COULD IMPORT A NODE MODULE

	// Configure this SFC
	export default {
		name: 'classdesigner',
		data () { 
			return { // Since the returned object is anonymous I think it's best always to have named entities inside it
				shipclass: {
					name: "Formidable",
					role: "",
					// role: Logic(), // Works if Logic is just a single anonymous function
					enginetonnage: 250,
					powertonnage: 500,
					commandtonnage: 250,
					habitationtonnage: 750,
					fueltonnage: 250,
					ammunitiontonnage: 250,
					storestonnage: 250,
					weaponrytonnage: 250
				},
				// logic: logic // HERE'S HOW I COULD TURN AN IMPORTED MODULE INTO A DATA OBJECT
			}
		}, 
		mounted() {
			//this.shipclass.role = Logic(); // works if module is just an anonymous function
			this.shipclass.role = Spacebiz.calculateShipRole(); // works if module is an object with methods
		},
		methods: {
			handleSubmit() {
				// alert(this.logic); // HERE'S HOW I COULD USE A DATA OBJECT (THAT I IMPORTED)
				//alert(JSON.stringify(this.shipclass)); // For debugging only! Linter won't let me console.log :(
			}
		},
		computed: {
			totaltonnage() {
				// A Flower corvette is maybe 1000 t
				// River-class frigate from 1370
				// Tacoma WW2 Frigate from 1500t
				// 40s JKN-class destroyer 1700        
				// 40s Tribal 1850 t
				// M class 1920 t
				// OP class 1650 t
				// QR, WZ, C class 1700 t
				// UV class 1777 t
				// ST class 1780 t
				// Weapon class 2000t
				// Battle class 2500t
				// A 70s FRIGATE masses about 2750 
				// Daring class 2800 t
				// 70s? Destroyer 3500
				// 40s Dido class cruiser 5800 t !
				// 60s County class new-gen missile destroyer 6200 t !
				// 80s Arleigh Burke destroyer 8000t 
				// York heavy cruiser 8,250 (ermm?!)
				// Sejong the Great large modern destroyer 8,500
				// C-Class Town and the Tiger class (last gun Cruiser) 11,500
				// USS Langley (CV-1) 12,700 t
				// Modern Zumwalt-class 15,000 farcical US missile destroyer
				// Yorktown-class CV 20000 t		
				// The Yamato 72,800
				// 100k Nimitz
				//return typeof this.enginetonnage;
			
				// ATTEMPTING TO OUTFACTOR TO A MODULE
				return this.shipclass.enginetonnage + this.shipclass.powertonnage + this.shipclass.commandtonnage + this.shipclass.habitationtonnage + this.shipclass.fueltonnage + this.shipclass.ammunitiontonnage + this.shipclass.storestonnage + this.shipclass.weaponrytonnage;
				
			},
			length() {
					return Math.round((this.shipclass.enginetonnage + this.shipclass.powertonnage + this.shipclass.commandtonnage + this.shipclass.habitationtonnage + this.shipclass.fueltonnage + this.shipclass.ammunitiontonnage + this.shipclass.storestonnage + this.shipclass.weaponrytonnage) 
					* (110/2750));
			},
			crew() {
					return Math.round((this.shipclass.enginetonnage + this.shipclass.powertonnage + this.shipclass.commandtonnage + this.shipclass.habitationtonnage + this.shipclass.fueltonnage + this.shipclass.ammunitiontonnage + this.shipclass.storestonnage + this.shipclass.weaponrytonnage) 
					* (177/2750))
			},
			officers()
			{
					return Math.round((this.shipclass.enginetonnage + this.shipclass.powertonnage + this.shipclass.commandtonnage + this.shipclass.habitationtonnage + this.shipclass.fueltonnage + this.shipclass.ammunitiontonnage + this.shipclass.storestonnage + this.shipclass.weaponrytonnage) 
					* (177/2750) * (0.075))
			}
		}
	}
</script>

<style>
	#classdesigner {
		background: #eef;
		/* Dark mode
		background: #eef;
		color: #efe; 
		*/
	}

	input[type=number] {
				font-size: 1.5em;
	}

	input[type=number]::-webkit-inner-spin-button {
		opacity: 1;
	}
</style>
