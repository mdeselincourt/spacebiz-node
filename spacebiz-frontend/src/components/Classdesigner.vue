<template>
	<div id="classdesigner">
		<form @submit.prevent="handleSubmit"><!-- capture and override "normal" form behaviour -->
			<h1>Class Designer</h1>
			<p>
				<label for="classname">Name:</label>
				<input id="classname" v-model="shipclass.name" value=""/>
				<input id="classrole" v-model="shipclass.role" value=""/>		
			</p>
	
			<table>
				<tr>
					<th>Tonnage</th><th>Manufacturer</th><th class="tooltipped">Reliability<span class="tooltip">1 means 'normal' not 'perfect'</span></th><th>Cost</th>
				</tr>
				
				<tr v-for="(d, dname) in shipclass.divisions" v-bind:key="dname">
					<td>
						<input :id="dname" v-model.number="d.tonnage" v-on:input="shipclass.reevaluaterole()" TYPE="NUMBER" MIN="50" MAX="20000" STEP="50" SIZE="20"/><!-- tonnage input-->
						t {{ dname }} <!-- tonnage input suffix --> 
					</td>
					<td>
						<select :v-model="d.brandname"><!-- selector for brandname -->
							<option v-for="(branddata, brand) in facts.brands" v-bind:key="brand" v-bind:value="brand">{{ brand }} (LINT TRICK : {{branddata.reliability}}) </option> <!-- list all the facts.brands as options -->
						</select>
					</td>
					<td>
						{{ d.reliability }}
					</td>
					<td>
						Ⴥ{{ d.value }}
					</td>
					<!-- for each division make a point -->
<!--				<li v-for="(d, dname) in shipclass.divisions" v-bind:key="dname"> -->
						<!-- using the :attr="datum" Vue syntax here -->
						<!-- tonnage input-->
<!--						<input :id="dname" v-model.number="d.tonnage" v-on:input="shipclass.reevaluaterole()" TYPE="NUMBER" MIN="50" MAX="20000" STEP="50" SIZE="20"/> -->
						<!-- tonnage input suffix -->
<!--					t {{ dname }}  -->
						<!-- selector for brandname -->
<!--					<select :v-model="d.brandname"> -->
							<!-- list all the facts.brands as options -->
<!--						<option v-for="brand in facts.brands" v-bind:key="brand" v-bind:value="brand">{{ brand }}</option> -->
<!--					</select> -->
<!--				</li>-->
				</tr>
				
			</table>

			
			<!-- As of writing I don't know a better way to update a model element that is ALSO reactive. (shipclass) is necessary to reference the instance for some reason -->
			<!--
			<ul>	
				
				<li><input id="enginetonnage" v-model.number="shipclass.divisions.engines.tonnage" v-on:change="shipclass.reevaluaterole(shipclass)" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="20"/>
					t Engines 
					<select v-model="shipclass.divisions.engines.brandname">
						<option v-for="brand in facts.brands" v-bind:key="brand" v-bind:value="brand"> 
							
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
				-->

				<!-- pre Divisions 
				<li><input id="enginetonnage" v-model.number="shipclass.enginetonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="20"/> t Engines</li>
				<li><input id="powertonnage" v-model.number="shipclass.powertonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Power</li>
				<li><input id="commandtonnage" v-model.number="shipclass.commandtonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Command</li>
				<li><input id="habitationtonnage" v-model.number="shipclass.habitationtonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Habitation</li>
				<li><input id="fueltonnage" v-model.number="shipclass.fueltonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Fuel</li>
				<li><input id="ammunitiontonnage" v-model.number="shipclass.ammunitiontonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Ammunition</li>
				<li><input id="storestonnage" v-model.number="shipclass.storestonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Stores</li>
				<li><input id="weaponrytonnage" v-model.number="shipclass.weaponrytonnage" TYPE="NUMBER" MIN="50" MAX="10000" STEP="50" SIZE="10"/> t Weaponry</li>
			</ul>
			-->

			<ul>
					<li>Total tonnage: {{ shipclass.tonnage }} t</li>
					<li>Length: {{ shipclass.length }} m</li>
					<li>Crew: {{ shipclass.complement }}</li>
					<li>of which Officers: {{ shipclass.officers }}</li>
					<li>CO: {{ shipclass.co }}</li>
					<li>Construction cost: Ⴥ{{ shipclass.value }}</li>

			</ul>

			<p><pre class="asciiart">

{{ shipclass.asciiArt }}

			</pre></p>

			<p>
				<input class="buttonClass" type="submit" :value="'Commission design for Ⴥ' + (shipclass.value / 10)"/><!-- gotta use :k="'java' + 'script'" format for attribute templates -->
			</p>  
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
					brands: {
						// Performance, Reliability, Cost
						"AMEC": {performance: 1, reliability: 1, value: 1}, 
						"Primarch": {performance: 0.8,reliability: 0.8,value: 0.64},
						"YORK": {performance: 1.2,reliability: 0.8,value: 1},
						"Majeure": {performance: 1.2,reliability: 0,value: 1.2},
						"Knowles Boyce": {performance: 1.2,reliability: 1.2,value: 1.44}
					}
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
