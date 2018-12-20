<template>
		<div id="app">
			<Spacebizuserbar></Spacebizuserbar><!-- SFC, needs import and component: below-->
			<News v-bind:worldstate = "worldstate"></News> <!-- pass entire world state object to the news component -->
			<Classdesigner></Classdesigner>

			<!-- non-componentised root component debugging output  -->
			<h1>World state:</h1> 
			{{ worldstate }}
		</div>
</template>

<script>
	// Import libraries
	// import axios from 'axios'; // For HTTP!
		// No don't use require('') that's native nodeJS, Vue doesn't like it

	// Import vue SFCs
	import Spacebizuserbar from './components/Spacebizuserbar.vue';
	import Classdesigner from './components/Classdesigner.vue';
	import News from './components/News.vue';
	
	// Configure this SFC
	export default {
		name: 'app',
		components: {
			Spacebizuserbar, Classdesigner, News
		},
		data () { // Yes this is right despite it not saying data:
			
			// return {
			// 	worldstate: {
			// 		news: [
			// 			{
			// 				id: 0,
			// 				type: "App.vue",
			// 				client: "App.vue",
			// 				budget: 1,
			// 				targetTonnage: 1,
			// 				quantity: 1,
			// 				role: "App.vue"
			// 			}
			// 		]
			// 	}
			// }

			return { worldstate: "" } // When the frontend page first loads, worldstate is unknown
			
		}, 
		mounted() { // "Called afer the instance has been mounted" which appears to mean ready for update events

			// I don't yet understand EC6 "async function" so I'll attempt without:
			// Get an API and then when it replies put the whole response into vue data name "info"
			
			// axios
			// .get('https://m1c6e25h0l.execute-api.us-east-1.amazonaws.com/dev/worldstate')
			// .then(response => (this.worldstate = response.data))

			
			this.worldstate = {news: [ { "id": 0, "type": "STATIC DUMMY API RESPONSE", "client": "United Stars", "budget": 3000, "targetTonnage": 2750, "quantity": 1, "role": "Multi-role" } ]};
			
		},
		methods: {
			
			// Example function
			
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
	/* CSS comment rules apply */

	/* This works for me; the more powerful? @font-face did not, immediately */
	@import url('https://fonts.googleapis.com/css?family=Rajdhani');

	#app {
		font-family: "Rajdhani", Calibri, sens-serif;
		background: #322;
	}

	input
	{
		font-family: "Rajdhani", Calibri, sens-serif;
	}

	.asciiart {
		background: black;
		color: grey;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
