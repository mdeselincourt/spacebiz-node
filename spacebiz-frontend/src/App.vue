<template>
		<div id="app">
			<Spacebizuserbar></Spacebizuserbar><!-- SFC, needs import and component: below-->
			<News v-bind:worldstate = "worldstate"></News> <!-- pass entire world state object to the news component -->
			<Classdesigner></Classdesigner>

			<!-- non-componentised root component debugging output -->
			<h1>World state:</h1> 
			{{ worldstate }}
		</div>
</template>

<script>
	// Import libraries
	// import axios from 'axios'; // For HTTP!

	// Import vue SFCs
	import Spacebizuserbar from './components/Spacebizuserbar.vue'
	import Classdesigner from './components/Classdesigner.vue' 
	import News from './components/News.vue'

	// Configure this SFC
	export default {
		name: 'app',
		components: {
			Spacebizuserbar, Classdesigner, News
		},
		data () {
			return {
				worldstate: {
					news: [
						{
							id: 0,
							type: "tender",
							client: "United Stars",
							budget: 3000,
							targetTonnage: 2750,
							quantity: 1,
							role: "Multi-role"
						}
					]
				}
			}
		}, 
		methods: {
			//getJokes: function () 
			//  {
			//    this.loading = true;
			//    
			//    axios.get("http://api.icndb.com/jokes/random/10")
			//      .then(
			//        (response)  => {
			//          this.loading = false;
			//          this.jokes = response.data.value; }
			//      , 
			//        (error)  =>  { this.loading = false; }
			//      )
			//}
		},
		computed: {}
	}
</script>

<style>
#app {
	font-family: 'Avenir', Arial, Helvetica, sans-serif;
	background: #fee;
}
</style>
