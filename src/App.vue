<template>
  <div id="app">
    <header>
      <span>Handling Ajax Request with Axios in Vue</span>
    </header>
    <main>
      <h2>Click the button to get Random jokes</h2>
      <button id="btn" class="" v-on:click="getJokes">Get Jokes</button>

      <div v-if="loading">
        <img src="../src/assets/loader.gif"/>
          Loading.....
      </div>

      <div class="wrapper">
        <div class="wrapper">
          <div class="row">
            <div v-for="joke in jokes" :key="joke.id">
              <div class="col-md-4 cards">
                <img src="https://placeimg.com/300/300/nature" class="img-responsive" alt="Random images placeholder"> 
                <div>
                  <h3>{{ joke.id }}</h3>
                  <p>{{ joke.joke }}</p>
                  <p>{{ joke.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: 'app',
    data () {
      return {
        jokes: [],
        loading: false
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
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
