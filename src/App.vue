<template>
  		<div id="app">
        <Spacebizuserbar></Spacebizuserbar><!-- SFC, needs import and component: below-->
        <Classdesigner></Classdesigner>
		</div>
</template>

<script>
  // Import libraries
  import axios from 'axios'; // For HTTP!

  // Import vue SFCs
  import Spacebizuserbar from './Spacebizuserbar.vue'
  import Classdesigner from './Classdesigner.vue' 

  // Configure this SFC
  export default {
    name: 'app',
    components: {
      Spacebizuserbar, Classdesigner
    },
    data () {
      return {}
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
  background: rgb(77, 0, 77);
}
</style>
