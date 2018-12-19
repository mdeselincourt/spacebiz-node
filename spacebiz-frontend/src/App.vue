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
			
			// Get the data object from the Extension

			// I don't yet understand EC6 "async function" so I'll attempt without

			/**
			axios.get('https://m1c6e25h0l.execute-api.us-east-1.amazonaws.com/dev/worldstate')
			.then(function (response) {
				return response;
				})
			.catch(function (error) {
				throw new Error(error)
			});
			*/
			
			// return the expected worldstate element

			
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
	/* CSS comment rules apply */

	/* Trying @import method */
	@import url('https://fonts.googleapis.com/css?family=Rajdhani');

	/* Trying @font-face method 
	@font-face {
		font-family: "poppins-semibold";
		src: url('/assets/fonts/poppins-semibold-webfont.woff2') format('woff2');

		font-family: "Major Mono Display";
		src: url('https://fonts.googleapis.com/css?family=Major+Mono+Display')
	} */

	#app {
		font-family: "Rajdhani", Calibri, sens-serif;
		background: #322;
	}

	input
	{
		font-family: "Rajdhani", Calibri, sens-serif;
	}

</style>
