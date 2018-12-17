<template>
  		<div id="classdesigner">
        <h1>Class Designer</h1>
		    <p>
          <label for="classname">Name:</label>
          <input id="classname" v-model="classname" value="Formidable">
          <input id="classrole" v-model="classrole" value="Frigate">		
			  </p>
		
			<ul>
				<li><input id="enginetonnage" v-model.number="enginetonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="20"/> t Engines</li>
				<li><input id="powertonnage" v-model.number="powertonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="500" SIZE="10"/> t Power</li>
				<li><input id="commandtonnage" v-model.number="commandtonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/> t Command</li>
				<li><input id="habitationtonnage" v-model.number="habitationtonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="750" SIZE="10"/> t Habitation</li>
				<li><input id="fueltonnage" v-model.number="fueltonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/> t Fuel</li>
				<li><input id="ammunitiontonnage" v-model.number="ammunitiontonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/> t Ammunition</li>
				<li><input id="storestonnage" v-model.number="storestonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/> t Stores</li>
				<li><input id="weaponrytonnage" v-model.number="weaponrytonnage" TYPE="NUMBER" MIN="50" MAX="1000" STEP="50" VALUE="250" SIZE="10"/> t Weaponry</li>
			</ul>
			
			<p>Total tonnage: {{ totaltonnage }} t</p>
			<p>Length: {{ length }} m</p>

			<p>
				<input type="submit">  
			</p> 
		</div>
</template>

<script>
  // Import libraries
  import axios from 'axios'; // For HTTP!

  // Configure this SFC
  export default {
    name: 'classdesigner',
    data () {
      return {
        classname: "Formidable",
        classrole: "Frigate",
        enginetonnage: 250,
        powertonnage: 500,
        commandtonnage: 250,
        habitationtonnage: 750,
        fueltonnage: 250,
        ammunitiontonnage: 250,
        storestonnage: 250,
        weaponrytonnage: 250
      }
    }, 
    methods: {
      getJokes: function () 
        {
          this.loading = true;
          
          axios.get("http://api.icndb.com/jokes/random/10")
            .then(
              (response)  => {
                this.loading = false;
                this.jokes = response.data.value; }
            , 
              (error)  =>  { this.loading = false; }
            )
        }
    },
    computed: {
      totaltonnage() {
        //return typeof this.enginetonnage;
        return this.enginetonnage + this.powertonnage + this.commandtonnage + this.habitationtonnage + this.fueltonnage + this.ammunitiontonnage + this.storestonnage + this.weaponrytonnage;
      },
      length() {
          return (this.enginetonnage + this.powertonnage + this.commandtonnage + this.habitationtonnage + this.fueltonnage + this.ammunitiontonnage + this.storestonnage + this.weaponrytonnage) * (110/2750);
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  background: #eee;
}

input[type=number] {
      font-size: 1.5em;
}

input[type=number]::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
