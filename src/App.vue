<template>
  		<div id="app">

        <!-- Topmost bar shows user state -->
        <!--<spacebizuserbar></spacebizuserbar>-->

        <h1>Class Designer</h1>
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
</template>

<script>
  import axios from 'axios';
  
  export default { // Testing
    name: 'app',
    data () {
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
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  background: #eee;
}
</style>
