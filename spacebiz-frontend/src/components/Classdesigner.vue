<template>
	<div id="classdesigner">
		<form @submit.prevent="handleSubmit"><!-- capture and override "normal" form behaviour -->
			<h1>Class Designer</h1>
			<p>
				<label for="classname">Name:</label>
				<input id="classname" v-model="shipclass.name" value=""/>
				<input id="classrole" v-model="shipclass.role" value=""/>		
			</p>
	
			<ul>
				<!-- As of writing I don't know a better way to update a model element that is ALSO reactive. (shipclass) is necessary to reference the instance for some reason -->
				<li><input id="enginetonnage" v-model.number="shipclass.divisions.engines.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="20"/>
					t Engines 
					<select v-model="shipclass.divisions.engines.brandname"> <!-- data entity to be maninipulated -->
						<option v-for="brand in facts.brands" v-bind:key="brand" v-bind:value="brand"> <!-- bind value to the x in y not to the data model -->
							<!-- v-bind:key for the official value and v-bind:value for the displayed value -->
							{{ brand }}
						</option>
					</select>
				</li>
				<li><input id="powertonnage" v-model.number="shipclass.divisions.power.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/>
				t Power</li>
				<li><input id="commandtonnage" v-model.number="shipclass.divisions.command.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/>
				t Command</li>
				<li><input id="habitationtonnage" v-model.number="shipclass.divisions.habitation.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/>
				t Habitation</li>
				<li><input id="fueltonnage" v-model.number="shipclass.divisions.fuel.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> 
				t Fuel</li>
				<li><input id="ammunitiontonnage" v-model.number="shipclass.divisions.ammunition.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/>
				t Ammunition</li>
				<li><input id="storestonnage" v-model.number="shipclass.divisions.stores.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/>
				t Stores</li>
				<li><input id="weaponrytonnage" v-model.number="shipclass.divisions.weaponry.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/>
				t Weaponry</li>
				<!-- pre Divisions 
				<li><input id="enginetonnage" v-model.number="shipclass.enginetonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="20"/> t Engines</li>
				<li><input id="powertonnage" v-model.number="shipclass.powertonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Power</li>
				<li><input id="commandtonnage" v-model.number="shipclass.commandtonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Command</li>
				<li><input id="habitationtonnage" v-model.number="shipclass.habitationtonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Habitation</li>
				<li><input id="fueltonnage" v-model.number="shipclass.fueltonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Fuel</li>
				<li><input id="ammunitiontonnage" v-model.number="shipclass.ammunitiontonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Ammunition</li>
				<li><input id="storestonnage" v-model.number="shipclass.storestonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Stores</li>
				<li><input id="weaponrytonnage" v-model.number="shipclass.weaponrytonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Weaponry</li>
				-->
			</ul>
		
			<ul>
					<li>Total tonnage: {{ shipclass.tonnage }} t</li>
					<li>Length: {{ shipclass.length }} m</li>
					<li>Crew: {{ shipclass.complement }}</li>
					<li>of which Officers: {{ shipclass.officers }}</li>
					<li>CO: OF-{{ shipclass.coof }}</li>

			</ul>
			<input type="submit"/>  
		</form>
	</div>
</template>

<script>
	// Import libraries
	// import axios from 'axios'; // For HTTP!
	// import json from 'json'; // For strinfigying for debugging/logging
	
	//     { Spacebiz, 
	import { ShipClass } from '../../../spacebiz-backend/logic/Spacebiz.js'; // HERE'S HOW I COULD IMPORT A MODULE

	// Configure this SFC
	export default {
		name: 'classdesigner',
		data () { 

			return { 
				shipclass: new ShipClass(),
				facts: {
					brands: ["AMEC", "Primarch", "YORK", "Majeure", "Knowles Boyce"]
				}
			};
			
			//{ // Since the returned object is anonymous I think it's best always to have named entities inside it
				
				
				// shipclass: {
				// 	name: "Formidable",
				// 	role: "",
				// 	// role: Logic(), // Works if Logic is just a single anonymous function
				// 	enginetonnage: 250,
				// 	powertonnage: 500,
				// 	commandtonnage: 250,
				// 	habitationtonnage: 750,
				// 	fueltonnage: 250,
				// 	ammunitiontonnage: 250,
				// 	storestonnage: 250,
				// 	weaponrytonnage: 250
				// }
				// , logic: logic // HERE'S HOW I COULD TURN AN IMPORTED MODULE INTO A DATA OBJECT
			//}
		}, 
		mounted() {
			// this.shipclass.role = Logic(); // works if module is just an anonymous function
			// this.shipclass.role = ShipClass.calculateShipRole(this.shipclass.enginetonnage + this.shipclass.powertonnage + this.shipclass.commandtonnage + this.shipclass.habitationtonnage + this.shipclass.fueltonnage + this.shipclass.ammunitiontonnage + this.shipclass.storestonnage + this.shipclass.weaponrytonnage); // works if module is an object with methods
		},
		methods: {
			handleSubmit() {
				// alert(this.logic); // HERE'S HOW I COULD USE A DATA OBJECT (THAT I IMPORTED)
				//alert(JSON.stringify(this.shipclass)); // For debugging only! Linter won't let me console.log :(
			}
		},
		computed: {
			
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
