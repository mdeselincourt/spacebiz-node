// Vessel Class Designer

// 50 tons of standard equipment requires 4 crew. 1 in every 12 crew must be commissioned.
// (OF-1 to OF-5 are sublt, lt, ltcdr, cdr & cap)
// 
// 

Vue.component('classdesign', {
	template: `
		<div>
		      <p>
				<label for="classname">Name:</label>
				<input id="classname" v-model="classname" value="Formidable">
				<input id="classrole" v-model="classrole" value="Frigate">
				
			  </p>
		
			<ul>
				<li>Engines<input id="enginetonnage" v-model.number="enginetonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="20"/></li>
				<li>Power<input id="powertonnage" v-model.number="powertonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="500" SIZE="10"/></li>
				<li>Command<input id="commandtonnage" v-model.number="commandtonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/></li>
				<li>Habitation<input id="habitationtonnage" v-model.number="habitationtonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="750" SIZE="10"/></li>
				<li>Fuel<input id="fueltonnage" v-model.number="fueltonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/></li>
				<li>Ammunition<input id="ammunitiontonnage" v-model.number="ammunitiontonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/></li>
				<li>Stores<input id="storestonnage" v-model.number="storestonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/></li>
				<li>Weaponry<input id="weaponrytonnage" v-model.number="weaponrytonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/></li>
			</ul>
			
			<p>{{ totaltonnage }} t</p>
			
			<p>
				<input type="submit">  
			</p> 
		</div>
	`,
	data() {
		return {
			classname: "Formidable",
			classrole: "Destroyer",
			enginetonnage: 250,
			powertonnage: 500,
			commandtonnage: 250,
			habitationtonnage: 750,
			fueltonnage: 250,
			ammunitiontonnage: 250,
			storestonnage: 250,
			weaponrytonnage: 250,
			
		}
	},
	computed: {
		totaltonnage() {
			//return typeof this.enginetonnage;
			return this.enginetonnage + this.powertonnage + this.commandtonnage + this.habitationtonnage + this.fueltonnage + this.ammunitiontonnage + this.storestonnage + this.weaponrytonnage;
		}
	}
})

// Counterintuitively, child components must be defined 
// BEFORE the parent (e.g. app) encounters them in its HTML
var app = new Vue({
	el: "#app",
	data: {
		header: "Class Designer",
		pageintro: "Specify and save a new class design",
		color: "color: black"
	}
})

